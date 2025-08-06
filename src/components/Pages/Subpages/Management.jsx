import { useEffect, useState } from 'react';
import { X, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

import leader1 from "../../../assets/images/about/leaders/leader1.jpeg";
import leader2 from "../../../assets/images/about/leaders/leader2.jpeg";
import leader3 from "../../../assets/images/about/leaders/leader3.jpeg";

const leadersData = {
  maurice: {
    name: "Mr Maurice",
    role: "Leadership & Strategy",
    image: leader1,
    shortBio: "Leading our community's vision and ensuring we stay true to our mission of empowering youth.",
    fullBio: "Maurice has been with NYC since its inception in 2020. With over 8 years of experience in youth development and community organizing, he brings a wealth of knowledge in strategic planning and organizational leadership. His passion for empowering young people stems from his own transformative experiences in community service during his university years.",
    speech: "\"Every young person has the potential to be a changemaker. Our role is not just to provide opportunities, but to create an environment where dreams can flourish and turn into reality. At NYC, we believe that when youth are empowered with the right tools, support, and platform, they don't just change their own lives – they transform entire communities.\"",
    achievements: [
      "Led NYC from 3 to 500+ members",
      "Recipient of Regional Youth Leadership Award 2023",
      "Established partnerships with 15+ local organizations"
    ],
    contact: {
      email: "maurice@nyc-community.org",
      phone: "+254 700 123 456",
      linkedin: "linkedin.com/in/maurice-nyc",
      twitter: "@maurice_nyc"
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/maurice-nyc",
      twitter: "https://twitter.com/maurice_nyc",
      facebook: "https://facebook.com/maurice.nyc"
    },
    color: "blue"
  },
  ambrosse: {
    name: "Mr Ambrosse",
    role: "Events & Projects",
    image: leader2,
    shortBio: "Organizing impactful programs, workshops, and community service projects that make a difference.",
    fullBio: "Ambrosse is our dynamic Events & Projects coordinator who joined NYC in 2021. With a background in project management and event planning, he has successfully coordinated over 50 community projects and workshops. His innovative approach to program design has helped NYC reach diverse youth demographics across the sub-county.",
    speech: "\"Great things happen when young people come together with a common purpose. Through our projects and events, we're not just building skills – we're building character, confidence, and a sense of responsibility towards our community. Every workshop we organize, every project we execute, is a step towards creating the leaders our society needs.\"",
    achievements: [
      "Coordinated 50+ successful community projects",
      "Designed and implemented Youth Skills Development Program",
      "Increased program participation by 300% in 2 years"
    ],
    contact: {
      email: "ambrosse@nyc-community.org",
      phone: "+254 700 234 567",
      linkedin: "linkedin.com/in/ambrosse-nyc",
      twitter: "@ambrosse_nyc"
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/ambrosse-nyc",
      twitter: "https://twitter.com/ambrosse_nyc",
      facebook: "https://facebook.com/ambrosse.nyc"
    },
    color: "green"
  },
  ibrahim: {
    name: "Mr Ibrahim",
    role: "Community Engagement",
    image: leader3,
    shortBio: "Building connections with new members and partner organizations to expand our impact.",
    fullBio: "Ibrahim serves as our Community Engagement specialist, focusing on outreach and partnership development. Since joining NYC in 2022, he has been instrumental in expanding our network and creating meaningful connections within the community. His background in communications and community relations has helped NYC build strong partnerships with schools, local businesses, and other youth organizations.",
    speech: "\"Community is not just about being in the same place – it's about belonging, contributing, and growing together. My mission is to ensure that every young person who walks through our doors feels welcomed, valued, and empowered to make their mark. We're building more than programs; we're building a family of changemakers.\"",
    achievements: [
      "Established partnerships with 10+ educational institutions",
      "Increased new member retention rate by 75%",
      "Developed community outreach program reaching 1000+ youth"
    ],
    contact: {
      email: "ibrahim@nyc-community.org",
      phone: "+254 700 345 678",
      linkedin: "linkedin.com/in/ibrahim-nyc",
      twitter: "@ibrahim_nyc"
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/ibrahim-nyc",
      twitter: "https://twitter.com/ibrahim_nyc",
      facebook: "https://facebook.com/ibrahim.nyc"
    },
    color: "blue"
  }
};

const TeamSection = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const openModal = (leaderId) => {
    setSelectedLeader(leadersData[leaderId]);
  };

  const closeModal = () => {
    setSelectedLeader(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  if (selectedLeader) {
    document.addEventListener('keydown', handleEscKey);
  }

  return () => {
    document.removeEventListener('keydown', handleEscKey);
  };
}, [selectedLeader]);

  return (
    <>
      {/* Leadership Team Section */}

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Passionate young leaders driving positive change in our communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(leadersData).map(([key, leader]) => {
              
              return (
                <div 
                  key={key}
                  className="rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                  onClick={() => openModal(key)}
                >
                  <div className="rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={`${leader.name} - ${leader.role}`} 
                      className="rounded-xl w-45 h-50 group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                  <h4 className={`text-${leader.color}-600 font-medium mb-4`}>{leader.role}</h4>
                  <p className="text-sm leading-relaxed mb-4">{leader.shortBio}</p>
                  <button className={`text-${leader.color}-600 font-semibold hover:text-${leader.color}-800 transition-colors`}>
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      {/* Modal */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-[9999] bg-background backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div 
            className="rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-8 border-b">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                type="button"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img 
                  src={selectedLeader.image} 
                  alt={selectedLeader.name}
                  className="w-32 h-40 rounded-xl object-cover"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">{selectedLeader.name}</h2>
                  <h3 className="text-xl text-blue-600 font-semibold mb-4">{selectedLeader.role}</h3>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a 
                      href={`mailto:${selectedLeader.contact.email}`}
                      className="p-2 hover:bg-blue-100 rounded-full transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href={`tel:${selectedLeader.contact.phone}`}
                      className="p-2 hover:bg-green-100 rounded-full transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                    <a 
                      href={selectedLeader.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-blue-100 rounded-full transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={selectedLeader.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-blue-100 rounded-full transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={selectedLeader.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-blue-100 rounded-full transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Full Bio */}
              <div>
                <h4 className="text-xl font-bold mb-4">About</h4>
                <p className="leading-relaxed">{selectedLeader.fullBio}</p>
              </div>

              {/* Leadership Speech/Quote */}
              <div className="p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Leadership Philosophy</h4>
                <blockquote className="italic leading-relaxed text-lg">
                  {selectedLeader.speech}
                </blockquote>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedLeader.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Get in Touch</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <a 
                      href={`mailto:${selectedLeader.contact.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {selectedLeader.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-500" />
                    <a 
                      href={`tel:${selectedLeader.contact.phone}`}
                      className="text-green-600 hover:text-green-800"
                    >
                      {selectedLeader.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamSection;