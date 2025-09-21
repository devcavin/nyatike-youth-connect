import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BsPeople } from "react-icons/bs";
import { ChartColumnIcon, ChartNoAxesCombined, Handshake } from "lucide-react";

// images
import homebg1 from "../../assets/images/home/homebg1.png";
import homebg2 from "../../assets/images/home/homebg2.jpeg";
import homebg3 from "../../assets/images/home/homebg3.jpeg";
import homebg4 from "../../assets/images/home/homebg4.jpeg";

const HomeData = [
    {
        id: 1,
        imageUrl: homebg1,
        title: "Empowering Youth Innovation",
        description: "Join a community of passionate young leaders creating positive change through collaboration, innovation, and impact.",
        buttonDesc: "Get Started",
        buttonUrl: "/services"
    },
    {
        id: 2,
        imageUrl: homebg2,
        title: "Build Tomorrow's Solutions",
        description: "Access cutting-edge resources, mentorship, and collaborative spaces to turn your ideas into reality.",
        buttonDesc: "Explore Programs",
        buttonUrl: "/about"
    },
    {
        id: 3,
        imageUrl: homebg3,
        title: "Connect, Collaborate, Create",
        description: "Engage with like-minded individuals and work together on projects that create meaningful change in our communities.",
        buttonDesc: "Join Our Community",
        buttonUrl: "/community"
    },
    {
        id: 4,
        imageUrl: homebg4,
        title: "Transforming Ideas into Impact",
        description: "Develop professional and personal skills through workshops, training programs, and hands-on experience.",
        buttonDesc: "Learn More",
        buttonUrl: "/about"
    }
];

const features = [
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Innovation Hub",
        description: "Access cutting-edge resources, mentorship, and collaborative spaces to turn your innovative ideas into reality.",
        color: "blue"
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Community Impact",
        description: "Connect with like-minded individuals and work together on projects that create meaningful change in our communities.",
        color: "green"
    },
    {
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        title: "Skill Development",
        description: "Develop professional and personal skills through workshops, training programs, and hands-on experience.",
        color: "blue"
    }
];

const stats = [
    { label: "Active Members", value: "2,500+", icon: <BsPeople className="inline-block w-6 h-6" /> },
    { label: "Projects Completed", value: "150+", icon: <ChartColumnIcon className="inline-block w-6 h-6" /> },
    { label: "Success Stories", value: "89%", icon: <ChartNoAxesCombined className="inline-block w-6 h-6" /> },
    { label: "Partner Organizations", value: "25+", icon: <Handshake className="inline-block w-6 h-6" /> }
];

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HomeData.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const navigateRequiredPage = (link) => {
        console.log(`Navigating to: ${link}`);
    };
    const FeatureIcon = ({ path, className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
        </svg>
    );

    FeatureIcon.propTypes = {
        path: PropTypes.string.isRequired,
        className: PropTypes.string,
    };

    return (
        <div className="w-full">
            {/* Hero Carousel Section */}
            <section className="relative overflow-hidden" aria-label="Hero carousel">
                <div className="relative h-screen min-h-[600px] max-h-[800px]">
                    {HomeData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {/* Background Image with overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={item.imageUrl}
                                    alt=""
                                    className="w-full h-full object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                                <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
                                        {item.title}
                                    </h1>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 sm:mb-10 text-white/95 drop-shadow-md leading-relaxed font-light px-4">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <button
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 min-w-[180px] sm:min-w-[200px]"
                                            onClick={() => navigateRequiredPage(item.buttonUrl)}
                                            aria-label={`${item.buttonDesc} - ${item.title}`}
                                        >
                                            {item.buttonDesc}
                                        </button>
                                        <button
                                            className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 min-w-[180px] sm:min-w-[200px]"
                                            onClick={() => navigateRequiredPage("/about")}
                                            aria-label="Learn more about our organization"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {HomeData.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Trust Indicators / Stats Section */}
            <section className="py-12 sm:py-16" aria-label="Organization statistics">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm sm:text-base font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" aria-label="Our key features">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                            Empowering Youth Through Innovation
                        </h2>
                        <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                            Join a community of passionate young leaders creating positive change through collaboration, innovation, and impact.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <article
                                key={index}
                                className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500/20"
                            >
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color === 'blue' ? 'from-blue-500 to-blue-600' :
                                        feature.color === 'green' ? 'from-green-500 to-green-600' :
                                            'from-purple-500 to-purple-600'
                                    } rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                                    <FeatureIcon path={feature.icon} className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20" aria-label="Call to action">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                        Ready to Make an Impact?
                    </h2>
                    <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto">
                        Join thousands of young innovators who are already creating positive change in their communities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="border-2 bg-blue-600 border-blue-600 text-white hover:bg-gray-50 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => navigateRequiredPage("/register")}
                        >
                            Join Our Community
                        </button>
                        <button
                            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            onClick={() => navigateRequiredPage("/contact")}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}