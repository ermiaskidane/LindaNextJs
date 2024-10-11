import { InfiniteSlider } from "@/components/motion-primitive/infinitSlider";
import Image from "next/image";

const InfiniteSliderBasic = () => {
  const carBrands = [
    { name: 'Hyundai', logo: '/images/garage/volkswagen.svg' },
    { name: 'Jaguar', logo: '/images/garage/bmw.svg' },
    { name: 'Jeep', logo: '/images/garage/fiat.svg' },
    { name: 'Kia', logo: '/images/garage/mitsubishi.svg' },
    { name: 'Land Rover', logo: '/images/garage/nissan.svg' },
    { name: 'Lexus', logo: '/images/garage/peugeot.svg' },
    { name: 'Mazda', logo: '/images/garage/renault.svg' },
    { name: 'Mercedes-Benz', logo: '/images/garage/skoda.svg' },
  ]
  return (
    <InfiniteSlider gap={32}  duration={8} reverse>
      {carBrands.map((brand, i) => (
        <div className="py-2" key={i}>
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={50}
            height={50}
            className="max-w-full h-auto"
          />
        </div>
        ))}
    </InfiniteSlider>
  );
}

export default InfiniteSliderBasic;
