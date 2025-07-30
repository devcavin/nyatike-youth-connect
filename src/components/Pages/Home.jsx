import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { HomeData } from "./Data/HomeData";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export const Home = () => {
    const navigate = useNavigate();

    const navigateRequiredPage = (link) => {
        navigate(link);
    };
  
    return (
        <div className="w-full">
            {/* Hero Carousel Section */}
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .8s ease"
                transitionDuration={800}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {HomeData.map((item) => (
                    <div key={item.id} className="relative w-full h-[100vh] min-h-[600px] hero-image">
                        {/* Background Image */}
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ objectPosition: 'center center' }}
                        />
                        
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                            <div className="max-w-5xl mx-auto">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
                                    {item.title}
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mb-10 text-white/90 drop-shadow-xl leading-relaxed font-light">
                                    {item.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 min-w-[200px]"
                                        onClick={() => {
                                            navigateRequiredPage(item.buttonUrl);
                                        }}
                                    >
                                        {item.buttonDesc}
                                    </button>
                                    <button
                                        className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px]"
                                        onClick={() => {
                                            navigateRequiredPage("/about");
                                        }}
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Features Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Empowering Youth Through Innovation
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                            Join a community of passionate young leaders creating positive change through collaboration, innovation, and impact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Innovation Hub</h3>
                            <p className="leading-relaxed">
                                Access cutting-edge resources, mentorship, and collaborative spaces to turn your innovative ideas into reality.
                            </p>
                        </div>

                        <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
                            <p className="leading-relaxed">
                                Connect with like-minded individuals and work together on projects that create meaningful change in our communities.
                            </p>
                        </div>

                        <div className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Skill Development</h3>
                            <p className="leading-relaxed">
                                Develop professional and personal skills through workshops, training programs, and hands-on experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
