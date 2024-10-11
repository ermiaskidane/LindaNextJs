import Counter from "@/components/animata/text/counter";

export default function GarageStatistics() {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/garage/garage4.jpg?height=400&width=1200')",
          filter: "brightness(40%)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide uppercase">// OUR GARAGE</p>
          <h2 className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            IN NUMBERS
          </h2>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { number: 20, label: "YEARS OF EXPERIENCE" },
            { number: 4560, label: "MOT'S COMPLETED" },
            { number: 7345, label: "SATISFIED CUSTOMERS" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <Counter
                direction="up"
                // format={() => {}}
                targetValue={stat.number}
              />
              {/* <p className="text-5xl font-extrabold">{}</p> */}
              <p className="mt-2 text-xl font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}