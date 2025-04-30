"use client";

export default function VolunteerCardSection() {
  const volunteers = [
    {
      name: "Sarah Rose",
      role: "Volunteer",
      image: "/images/v1.png", // Replace with your image path
      bgColor: "bg-orange-500",
    },
    {
      name: "Jessica Brown",
      role: "Volunteer",
      image: "/images/v5.png", // Replace with your image path
      bgColor: "bg-teal-500",
    },
    {
      name: "Yoni Albert",
      role: "Student",
      image: "/images/v3.png", // Replace with your image path
      bgColor: "bg-orange-500",
    },
    {
      name: "Christine Eve",
      role: "Volunteer",
      image: "/images/v4.png", // Replace with your image path
      bgColor: "bg-purple-500",
      socialLinks: [
        { icon: "facebook", url: "#" },
        { icon: "twitter", url: "#" },
        { icon: "linkedin", url: "#" },
      ],
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Volunteers</h2>
        <p className="text-gray-600 mb-8">Meet Professionals</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div
                className="h-70 bg-cover bg-center"
                style={{ backgroundImage: `url(${volunteer.image})` }}
              ></div>

              {/* Content Section */}
              <div
                className={`p-4 text-white ${volunteer.bgColor} flex flex-col items-center`}
              >
                <h3 className="text-lg font-bold">{volunteer.name}</h3>
                <p className="text-sm">{volunteer.role}</p>
                {volunteer.socialLinks && (
                  <div className="flex space-x-4 mt-4">
                    {volunteer.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="text-white hover:opacity-80"
                      >
                        <i className={`fab fa-${link.icon}`}></i>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}