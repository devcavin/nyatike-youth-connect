import { Hero } from "./SubPages/Hero/Hero";

const Home = () => {
    return (
        <div>
            {/* Hero section takes full width */}
            <Hero />
            
            {/* Other content can use container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Add other sections here */}
            </div>
        </div>
    );
}

export default Home