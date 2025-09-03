import { Users, GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function Services() {
  const servicesData = [
    {
      title: "Mentorship Programs",
      description:
        "Connect with experienced mentors to guide your personal and career journey.",
      icon: <Users className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Skill Training",
      description:
        "Hands-on workshops to help you develop digital, entrepreneurial, and soft skills.",
      icon: <GraduationCap className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Career Guidance",
      description:
        "Guide on various career path and the various ways on building and venturing into one.",
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Community Events",
      description:
        "Engage with peers through networking sessions, hackathons, and outreach programs.",
      icon: <Calendar className="w-12 h-12 text-green-600" />,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p>
          We empower youth by providing mentorship, skills training, and
          opportunities to grow personally and professionally.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold mb-3 text-center">
              {service.title}
            </h2>
            <p className="text-center">{service.description}</p>
            <div className="flex justify-center mt-6">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to get involved?
        </h2>
        <p className="mb-6">
          Join our growing community and start your journey today.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
