import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { HeroData } from "./HeroData";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export const Hero = () => {
    const navigate = useNavigate();

    const navigateRequiredPage = (link) => {
        navigate(link);
    };
  
    return (
        <div className="w-full">
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {HeroData.map((item) => (
                    <div key={item.id} className="relative w-full h-[100vh] min-h-[500px] hero-image">
                        {/* Background Image */}
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ objectPosition: 'center center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-green/60 via-green/75 to-green/60"></div>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 hero-text-white drop-shadow-2xl text-shadow-lg">
                                {item.title}
                            </h2>
                            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 hero-text-light drop-shadow-xl text-shadow-md leading-relaxed">
                                {item.description}
                            </p>
                            <button
                                className="hero-text-white bg-white/15 backdrop-blur-sm border-2 hero-border-white hover:!bg-white hover:!text-gray-900 transition-all duration-300 px-8 py-3 rounded-full mt-4 text-lg font-semibold shadow-2xl hover:shadow-white/25"
                                onClick={() => {
                                    navigateRequiredPage(item.buttonUrl);
                                }}
                            >
                                {item.buttonDesc}
                            </button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
