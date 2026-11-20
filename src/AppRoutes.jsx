import { useEffect, useRef } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import Navbar from './components/Layouts/Navbar'
import Footer from "./components/Layouts/Footer"
import { Home } from "./components/Pages/Home"
import { About } from "./components/Pages/About"
import Services from "./components/Pages/Services"
import Blogs from "./components/Pages/Blogs"

// Internal links navigate client-side, so the browser no longer resets scroll and
// focus for us. On a route change, return to the top and move focus to <main>.
const useRouteChangeReset = () => {
    const { pathname } = useLocation()
    const previousPathname = useRef(pathname)

    useEffect(() => {
        if (previousPathname.current === pathname) return
        previousPathname.current = pathname
        // "instant" overrides the global `scroll-behavior: smooth`. A smooth scroll that is
        // still in flight can partly undo the first jump (seen in Chromium), so repeat it
        // once on the next frame.
        const jumpToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        jumpToTop()
        const frame = requestAnimationFrame(jumpToTop)
        document.getElementById("main-content")?.focus({ preventScroll: true })
        return () => cancelAnimationFrame(frame)
    }, [pathname])
}

export const AppRoutes = () => {
    useRouteChangeReset()

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main
                id="main-content"
                tabIndex={-1}
                className="relative flex-1 overflow-x-hidden pt-16 md:pt-20"
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blogs" element={<Blogs />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
