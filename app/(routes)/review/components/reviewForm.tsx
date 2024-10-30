"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from 'react'
import { Star } from 'lucide-react'
import { Order, OrderItem, Products } from "@/types";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  productId: z.string({
    required_error: "Please select a product to review.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, {
    message: "Comment must be at least 10 characters.",
  }),
})

interface ReviewFormProps {
  searchParams: {
    orderId: string;
    email: string;
  },
  orders: Order
}

const ReviewForm: React.FC<ReviewFormProps> = ({searchParams, orders}) => {
  const [selectedProduct, setSelectedProduct] = useState<OrderItem | null>(null)
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      productId: "",
      username: "",
      email: searchParams.email || "",
      rating: 0,
      comment: "",
    },
  })

  const router = useRouter();

  const onSubmit = async(data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/review`, data)
      router.refresh()
      router.push(`/listclothes`);
      toast.success("review has been created");
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 mt-6 ">
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Product to Review</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value)
                    setSelectedProduct(orders.orderItems.find(p => p.productId === value) || null)
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="sm:p-2">
                      <SelectValue placeholder="Select a product"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {orders.orderItems.map((orderItem) => (
                      <SelectItem key={orderItem.id} value={orderItem.productId}>
                        <div className="flex items-center space-x-3">
                          <Image
                            src={orderItem.product.images[0].url}
                            alt={orderItem.product.name}
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <span>{orderItem.product.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the product you want to review from your order #{orders.id}.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {selectedProduct && (
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Image
                src={selectedProduct.product.images[0].url}
                alt={selectedProduct.product.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className="font-semibold text-lg">{selectedProduct.product.name}</h2>
                <p className="text-sm text-gray-500">You are reviewing this product</p>
              </div>
            </div>
          )}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-8 h-8 cursor-pointer ${
                            star <= field.value ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
                          }`}
                          onClick={() => field.onChange(star)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              field.onChange(star)
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label={`Rate ${star} stars`}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what you think about the product"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide a detailed review of your experience with the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading} type="submit" className="w-full">Submit Review</Button>
          </form>
        </Form>
    </>
  )
}

export default ReviewForm