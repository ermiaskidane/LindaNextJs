"use client"

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import ImageUpload from '../image-upload';
// import { FileUpload } from '../file-upload';
import { Category, Color, Image as ImagesDB, Product, Size } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button';
import { toast } from "react-hot-toast"
import { FileUpload } from '@/components/file-upload';
import Image from 'next/image';


const formSchema = z.object({
  images: z.object({ url: z.string() }).array(),
  name: z.string().min(1),
  quantity: z.coerce.number().min(1),
  categoryId: z.string().min(1),
  colorId: z.string().min(1),
  sizeId: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().min(1),
  isFeatured: z.boolean().default(false).optional(),
  isArchived: z.boolean().default(false).optional()
})

type ClothFormValues = z.infer<typeof formSchema>
interface ClothFormProps {
  initialData: Product & {
    images: ImagesDB[]
  } | null;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
  // isOpen: boolean;
  // onClose: () => void;
  // loading: boolean;
  // onSubmit?: (data: ClothFormValues) => void;
  // initialData?: Product
}

const ClothForm: React.FC<ClothFormProps> = ({
  initialData,
  categories,
  sizes,
  colors
}) => {

  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  // const title = initialData ? 'Edit product' : 'Create product';
  // const description = initialData ? 'Edit a product.' : 'Add a new product';
  const toastMessage = initialData ? 'Product updated.' : 'Product created.';
  const action = initialData ? 'Save changes' : 'Create';

  const defaultValues = initialData ? {
    ...initialData, 
    price: parseFloat(String(initialData?.price)),
    images: initialData.images.map(image => ({ url: image.url ?? '' })) // Replace null with empty string
  } : {
    name: '',
    images: [],
    price: 0,
    quantity: 0,
    categoryId: '',
    colorId: '',
    sizeId: '',
    description: "",
    isFeatured: false,
    isArchived: false,
  }

  const form = useForm<ClothFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  const { isSubmitting, isValid } = form.formState;
 
  // console.log("dskfhksf", initialData)

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  const onSubmit = async (data: ClothFormValues) => {
    console.log("fasfsdfsd", data)
    try {
      if(initialData) {
        await axios.patch(`/api/products/${params.clothesId}`, data)
      } else {
        await axios.post(`/api/products`, data)
      }
      router.refresh();
      router.push(`/listclothes`)
      toast.success(toastMessage);
    } catch(error: any) {
      toast.error('Something went wrong.');
    }
  }

  return (
    <>
    <div className="flex items-center justify-between">
     <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem className='w-1/2'>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  {/* TODO: now we remove the images manually from db when we update them for the old images
                   we need to add a filter function to remove the old one */}
                  <FileUpload
                  endpoint="clothesImage"
                  onChange={(url) => {
                    if (url) {
                      // console.log("image-upload", url)
                      // Ensure url is an array
                      const urls = Array.isArray(url) ? url : [url];
                      
                      // Append each URL to the images array
                      form.setValue("images", [...form.getValues().images, ...urls.map(u => ({ url: u }))]);
                    }
                  }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className='mb-2 md:mb-0'>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} placeholder="Product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className='mb-2 md:mb-0'>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={isSubmitting} placeholder="9.99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className='mb-2 md:mb-0'>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" disabled={isSubmitting} placeholder="1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className='mb-2 md:mb-0'>
                  <FormLabel>Category</FormLabel>
                  <Select disabled={isSubmitting} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> 
            <FormField
              control={form.control}
              name="sizeId"
              render={({ field }) => (
                <FormItem className='mb-2 md:mb-0'>
                  <FormLabel>Size</FormLabel>
                  <Select disabled={isSubmitting} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} placeholder="Select a size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sizes.map((size) => (
                        <SelectItem key={size.id} value={size.id}>{size.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="colorId"
              render={({ field }) => (
                <FormItem className='mb-2 md:mb-0'>
                  <FormLabel>Color</FormLabel>
                  <Select disabled={isSubmitting} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} placeholder="Select a color" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {colors.map((color) => (
                        <SelectItem key={color.id} value={color.id}>{color.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className='mb-4 md:mb-0'>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input disabled={isSubmitting} placeholder="Detail of product" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
            />
            <FormField
              control={form.control}
              name="isFeatured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mb-4 md:mb-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      // the type of onCheckedChange is not compitable so we use this
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Featured
                    </FormLabel>
                    <FormDescription>
                      This product will appear on the home page
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isArchived"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mb-2 md:mb-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Archived
                    </FormLabel>
                    <FormDescription>
                      This product will not appear anywhere in the store.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={!isValid || isSubmitting} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
      </div>
      </>
  )
}


export default ClothForm