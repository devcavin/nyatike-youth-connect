import { useState, useSyncExternalStore } from "react"
import { Link } from "react-router-dom"
import { HiPause, HiPlay } from "react-icons/hi"

import homebg1 from "../../../assets/images/home/homebg1.png"
import homebg2 from "../../../assets/images/home/homebg2.jpeg"
import homebg3 from "../../../assets/images/home/homebg3.jpeg"
import homebg4 from "../../../assets/images/home/homebg4.jpeg"

// Slide copy and images are unchanged from the previous Home.jsx. `cta` is the slide's
// own call to action; `to: null` means its destination does not exist yet.
const SLIDES = [
    {
        id: 1,
        image: homebg1,
        width: 1280,
        height: 720,
        emblem: true, // logo artwork on black: shown whole, not cropped
        title: "Empowering Youth Innovation",
        description: "Join a community of passionate young leaders creating positive change through collaboration, innovation, and impact.",
        cta: { label: "Get Started", to: "/services" },
    },
    {
        id: 2,
        image: homebg2,
        width: 1280,
        height: 720,
        position: "50% 30%",
        title: "Build Tomorrow's Solutions",
        description: "Access cutting-edge resources, mentorship, and collaborative spaces to turn your ideas into reality.",
        cta: { label: "Explore Programs", to: "/about" },
    },
    {
        id: 3,
        image: homebg3,
        width: 720,
        height: 1280,
        position: "50% 35%",
        title: "Connect, Collaborate, Create",
        description: "Engage with like-minded individuals and work together on projects that create meaningful change in our communities.",
        // "Join Our Community" used to point at "/community", which is not a route.
        // Left out until the owner decides where it should go (audit decision D-01).
        cta: null,
    },
    {
        id: 4,
        image: homebg4,
        width: 720,
        height: 1280,
        position: "50% 30%",
        title: "Transforming Ideas into Impact",
        description: "Develop professional and personal skills through workshops, training programs, and hands-on experience.",
        cta: { label: "Learn more about us", to: "/about" },
    },
]

// Previously the second button on every slide, labelled just "Learn More". Generic link
// text is unhelpful in a screen reader's link list and to search engines, so it is descriptive now.
const LEARN_MORE = { label: "Learn more about us", to: "/about" }

// First action is the primary button. "Learn more about us" is only added when it leads
// somewhere different from the slide's own action.
const getActions = (slide) => {
    const actions = slide.cta ? [slide.cta] : []
    if (!slide.cta || slide.cta.to !== LEARN_MORE.to) actions.push(LEARN_MORE)
    return actions
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

const subscribeToReducedMotion = (onChange) => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
}

const usePrefersReducedMotion = () =>
    useSyncExternalStore(
        subscribeToReducedMotion,
        () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
        () => false,
    )

export const HomeHero = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const prefersReducedMotion = usePrefersReducedMotion()

    // No autoplay when the visitor prefers reduced motion; they can still use the controls.
    const isPlaying = !prefersReducedMotion && !isPaused
    const slide = SLIDES[activeIndex]
    const actions = getActions(slide)

    const showNextSlide = () => setActiveIndex((index) => (index + 1) % SLIDES.length)

    return (
        <section
            className="home-hero"
            aria-roledescription="carousel"
            aria-label="Featured highlights"
            data-playing={isPlaying}
            data-emblem={slide.emblem ? "true" : undefined}
        >
            {/* Decorative backgrounds; the message is in the text. */}
            <div className="home-hero__media" aria-hidden="true">
                {SLIDES.map((item, index) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt=""
                        width={item.width}
                        height={item.height}
                        className={[
                            "home-hero__img",
                            item.emblem ? "home-hero__img--emblem" : "",
                            index === activeIndex ? "is-active" : "",
                        ].join(" ").trim()}
                        style={item.position ? { objectPosition: item.position } : undefined}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : undefined}
                        decoding="async"
                    />
                ))}
                <div className="home-hero__scrim" />
            </div>

            <div className="home-hero__inner mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Persistent region so changes can be announced while paused. */}
                <div
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${activeIndex + 1} of ${SLIDES.length}`}
                    aria-live={isPlaying ? "off" : "polite"}
                >
                    <div key={slide.id} className="home-hero__slide-body">
                        <h1 className="home-hero__title">{slide.title}</h1>
                        <p className="home-hero__desc">{slide.description}</p>
                        <div className="home-hero__actions">
                            {actions.map((action, index) => (
                                <Link
                                    key={action.to + action.label}
                                    to={action.to}
                                    className={`home-hero__btn ${index === 0 ? "home-hero__btn--primary" : "home-hero__btn--secondary"}`}
                                >
                                    {action.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="home-hero__controls">
                    <ul className="home-hero__dots">
                        {SLIDES.map((item, index) => (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className="home-hero__dot"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Show slide ${index + 1} of ${SLIDES.length}`}
                                    aria-current={index === activeIndex ? "true" : undefined}
                                >
                                    <span
                                        className="home-hero__dot-fill"
                                        onAnimationEnd={(event) => {
                                            if (index === activeIndex && event.animationName === "home-hero-progress") {
                                                showNextSlide()
                                            }
                                        }}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {!prefersReducedMotion && (
                        <button
                            type="button"
                            className="home-hero__pause"
                            onClick={() => setIsPaused((paused) => !paused)}
                            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                        >
                            {isPaused ? (
                                <HiPlay className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <HiPause className="h-5 w-5" aria-hidden="true" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}
