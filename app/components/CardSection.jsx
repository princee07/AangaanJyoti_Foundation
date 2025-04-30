// components/CardSection.js
export default function CardSection() {
    const cards = [
      {
        title: "More charity better lives",
        description: "Charity improves lives by providing essential resources to those in need.",
        bgImage: "/images/charity.png",
      
      },
      {
        title: "How to become volunteer",
        description: "Learn how you can contribute your time and skills to make a difference.",
        bgImage: "/images/volun.png",
      },
      {
        title: "Poor children education",
        description: "Education is the key to breaking the cycle of poverty for children.",
        bgImage: "/images/child.png",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg group h-100"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay with very low opacity */}
                <div
                  className={`absolute inset-0 ${card.overlayColor} bg-opacity-10 group-hover:bg-opacity-5 transition duration-300`}
                ></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-6 z-10">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm mb-4">{card.description}</p>
                  <button className="bg-white text-gray-900 font-semibold px-4 py-2 rounded hover:bg-gray-200">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
