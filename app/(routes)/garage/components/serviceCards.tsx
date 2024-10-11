import Image from 'next/image'

const ServiceCard = ({ Icon, title, subtitle }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition duration-300">
    <div className="flex-shrink-0">
    <Image src={Icon} alt={title} width={48} height={48} className=""/>
      {/* <Icon className="w-12 h-12 text-orange-500" aria-hidden="true" /> */}
    </div>
    <div>
      <h3 className="text-sm font-semibold text-orange-500 uppercase">{subtitle}</h3>
      <h4 className="text-xl font-bold text-gray-800">{title}</h4>
    </div>
  </div>
);

export default function Cards() {
  const services = [
    { Icon: "/images/brakes.png", title: 'BRAKES', subtitle: 'DISCS & PADS' },
    { Icon: "/images/exhaust-pipe.png", title: 'DPF & EXHAUST', subtitle: 'REGEN & REPAIR' },
    { Icon: "/images/setting.png", title: 'ENGINE REBUILDS', subtitle: 'PETROL & DIESEL' },
    { Icon: "/images/gear-shift.png", title: 'GEARBOX', subtitle: 'MANUAL & AUTOMATIC' },
    { Icon: "/images/power.png", title: 'TURBOCHARGERS', subtitle: 'REGEN & REPAIR' },
    { Icon: "/images/damper.png", title: 'SUSPENSION', subtitle: 'REPAIRS & UPGRADES' },
  ];
  
  return (
    <div className="py-12 bg-gray-100">
          <div className="mx-auto px-4">            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
    </div>
  )
}

