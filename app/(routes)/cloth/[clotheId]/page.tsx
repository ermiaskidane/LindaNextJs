// import Card from "@/components/card";

// import Card from "@/components/card";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const Cloth = () => {

  const product = {
    id: '65cf9b7aa4e7c8104dd58ed0',
    name: 'black jersay',
    price: 25,
    description: 'quality clothes for hanging out',
    quantity: 10,
    isFeatured: true,
    isArchived: true,
    sizeId: '65cba68f230ca7119303f858',
    colorId: '65cba68f230ca7119303f85d',
    categoryId: '65cba68f230ca7119303f84b',
    createdAt: new Date('2024-02-16T17:29:30.000Z'),
    updatedAt: new Date('2024-02-17T14:14:34.000Z'),
    images: [
      {
        id: '65d0bf4a02e67bafae95e97b',
        productId: '65cf9b7aa4e7c8104dd58ed0',
        url: 'https://utfs.io/f/70fb3fc0-735c-4ec5-bb22-d4a94f7a8f5b-5z4hwk.jpg',
        createdAt: new Date('2024-02-17T14:14:34.000Z'),
        updatedAt: new Date('2024-02-17T14:14:34.000Z')
      },
      {
        id: '65d0bf4a02e67bafae95e97c',
        productId: '65cf9b7aa4e7c8104dd58ed0',
        url: 'https://utfs.io/f/948197f5-a995-4c0f-8a8d-c44da3d86418-5z4hwj.jpg',
        createdAt: new Date('2024-02-17T14:14:34.000Z'),
        updatedAt: new Date('2024-02-17T14:14:34.000Z')
      }
    ]
  }
  return ( <div>
    {/* <Card products={product}/> */}
    <div className="flex flex-col md:flex-row p-4">
    <Card className="w-[350px] md:w-[450px] self-center ">
      <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
        <Image 
            fill
            src={product.images[0].url!}
            // src="/images/service/2.jpg"
            alt="Image"
            className="object-cover object-center" />
      </div>
    </Card>
    <div className="flex flex-col gap-4 w-full md:p-4 ">
      <div className="flex justify-between h-fit">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-2xl text-gray-900">£22</p>
      </div>

      <Separator/>

      {/* <div className="flex flex-col"> */}
        <div className="flex">
          <h5 className="pr-5">Color</h5>
          <ul className="flex ml-4 space-x-2">
            <li>green</li>
            <li>green</li>
            <li>green</li>
            <li>green</li>
            <li>green</li>
          </ul>
        </div>
      {/* </div> */}

      <div className="flex">
          <h5 className="pr-12">size</h5>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* <Separator/> */}
      <div className="flex">
          {/* <h5>description</h5> */}
          <p>Adipisicing elit. Magni, cum sint illum recusandae dolor aliquid fugiat placeat laboriosam dolores reprehenderit!</p>
      </div>

      <Separator/>
    </div>
    {/* <Separator className="my-4" /> */}
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae praesentium voluptas magni quis, exercitationem tempore ex officia, quae sit voluptates nesciunt laboriosam expedita nostrum, repudiandae fugiat. Fugit voluptatum accusantium officia? Minus doloremque quibusdam illum nihil odio! Architecto expedita dolorem iste perspiciatis rerum laborum necessitatibus ab consequuntur eligendi suscipit. Ducimus!</p>
  </div>);
}
 
export default Cloth;