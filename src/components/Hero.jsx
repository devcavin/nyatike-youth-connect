/**
 * @author: Cavin
 */


import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero background images representing youth community activities
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      webp: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp",
      alt: "Youth collaborating on community project",
      title: "Building Tomorrow Together",
      description: "Empowering young minds through collaborative innovation."
    },
    {
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      webp: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp",
      alt: "Young entrepreneurs working together",
      title: "Entrepreneurship & Innovation",
      description: "Nurturing business leaders who drive economic growth."
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      webp: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp",
      alt: "Youth learning and development session",
      title: "Skills & Development",
      description: "Unlocking potential through mentorship and education."
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      webp: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp",
      alt: "Community volunteering activities",
      title: "Community Impact",
      description: "Creating meaningful change in our neighborhoods."
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      webp: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp",
      alt: "Youth leadership and teamwork",
      title: "Leadership Development",
      description: "Cultivating confident leaders who inspire others."
    }
  ];

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % heroImages.length;
    const img = new Image();
    img.src = heroImages[nextIndex].webp || heroImages[nextIndex].url;
  });

  // Auto-rotate with pause functionality
  useEffect(() => {
    if (!prefersReducedMotion && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 6000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused(!isPaused);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Handle image loading
  const handleImageLoad = (index) => {
    if (index === 0) {
      setIsLoading(false);
    }
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const currentImage = heroImages[currentImageIndex];

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (!prefersReducedMotion) {
      setIsPaused(false);
    }
  };

  return (
    <>
      {/* Meta tags for social sharing */}
      <div style={{ display: 'none' }}>
        <meta property="og:title" content="Nyatike Youth Connect - Empowering Youth, Building Futures" />
        <meta property="og:description" content="Driving economic growth through youth empowerment, innovation, and community-driven solutions in Nyatike, Macalder - Kenya." />
        <meta property="og:image" content={currentImage.webp || currentImage.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nyatike Youth Connect" />
        <meta name="twitter:description" content="Empowering youth and building futures in Nyatike, Macalder - Kenya" />
        <meta name="twitter:image" content={currentImage.webp || currentImage.url} />
      </div>

      <section 
        id="home" 
        className="relative pt-16 min-h-screen overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="banner"
        aria-label="Hero section"
      >

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-200 flex items-center justify-center z-30">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
              <p className="text-lg">Loading...</p>
            </div>
          </div>
        )}

        {/* Dynamic Background Images with Error Handling */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {!imageErrors[index] ? (
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </picture>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                  <p className="text-white text-lg">Image unavailable</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <button
            onClick={prevImage}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            aria-label="Previous image"
            tabIndex="0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
          <button
            onClick={nextImage}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            aria-label="Next image"
            tabIndex="0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center text-white">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="block text-yellow-300 mb-2 sm:mb-4">Nyatike Youth</span>
              <span className="block">Connect</span>
            </h1>

            {/* Location */}
            <div className="flex items-center justify-center mb-8 text-yellow-200">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg font-medium">Nyatike, Migori -KE</span>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
              Empowering Youth • Building Futures • Creating Change
            </p>

            {/* Dynamic Content Based on Current Image */}
            <div className="mb-12 max-w-3xl mx-auto">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-yellow-200 transition-all duration-500 ${
                !prefersReducedMotion ? 'transform' : ''
              }`}>
                {currentImage.title}
              </h2>
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed opacity-90 transition-all duration-500 ${
                !prefersReducedMotion ? 'transform' : ''
              }`}>
                {currentImage.description}
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-yellow-400 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              >
                Discover Our Impact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-yellow-400 text-yellow-400 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              >
                Join the Movement
              </button>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 ${
                index === currentImageIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}: ${heroImages[index].title}`}
            />
          ))}
        </div>

        {/* Slide Counter and Controls */}
        {/* <div className="absolute bottom-8 right-4 sm:right-8 z-20 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm flex items-center space-x-2">
          <span>{currentImageIndex + 1} / {heroImages.length}</span>
          {!prefersReducedMotion && (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="ml-2 text-yellow-400 hover:text-yellow-300 focus:outline-none focus:text-yellow-300"
              aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
            >
              {isPaused ? '▶' : '⏸'}
            </button>
          )}
        </div> */}

        {/* Keyboard Navigation Hint */}
        {/* <div className="absolute top-20 right-4 z-20 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs opacity-50 hidden lg:block">
          Use ← → keys or spacebar
        </div> */}

       {/*  <style jsx>{`
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style> */}
      </section>
    </>
  );
};

export default Hero;