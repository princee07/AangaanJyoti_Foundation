"use client";

export default function CausesSection() {
  const causes = [
    {
      title: "Save Poor Children",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      goal: "$890",
      raised: "$310",
      progress: 34.9,
      image: "/images/cause1.png", // Replace with your image path
      buttonColor: "bg-teal-500",
    },
    {
      title: "They Want to Study",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      goal: "unlimited",
      raised: "$230",
      progress: "unlimited",
      image: "/images/cause2.png", // Replace with your image path
      buttonColor: "bg-red-500",
    },
    {
      title: "Healthy Food for All",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      goal: "$680",
      raised: "$210",
      progress: 30.9,
      image: "/images/cause3.png", // Replace with your image path
      buttonColor: "bg-orange-500",
    },
    {
      title: "Help the Needy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      goal: "$500",
      raised: "$150",
      progress: 17.8,
      image: "/images/cause4.png", // Replace with your image path
      buttonColor: "bg-purple-500",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Causes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Image Section */}
              <div
                className="relative h-64 bg-cover bg-center group-hover:blur-sm transition duration-300"
                style={{ backgroundImage: `url(${cause.image})` }}
              >
                <div
                  className={`absolute bottom-0 left-0 w-full h-6 ${cause.buttonColor}`}
                  style={{ width: `${cause.progress}%` }}
                ></div>
                <div className="absolute top-2 left-2 bg-white text-sm px-2 py-1 rounded">
                  {cause.progress === "unlimited"
                    ? "unlimited"
                    : `${cause.progress}%`}
                </div>

                {/* Centered Donate Button */}
                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
                    Donate
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{cause.title}</h3>
                <p className="text-gray-600 mb-4">{cause.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div>
                    <p>
                      <strong>Goal:</strong> {cause.goal}
                    </p>
                    <p>
                      <strong>Raised:</strong> {cause.raised}
                    </p>
                  </div>
                </div>
                <button
                  className={`text-white px-4 py-2 rounded ${cause.buttonColor} hover:opacity-90`}
                >
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