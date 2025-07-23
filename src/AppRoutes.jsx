import { Route, Routes } from "react-router-dom"

import Navbar from './components/Layouts/Navbar'
import Footer from "./components/Layouts/Footer"
import Home from "./components/Pages/Home"

export const AppRoutes = () => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <Navbar />
            <div className="pt-16 md:pt-20">
                <Routes>
                    <Route path="/" element={
                        <div className="overflow-hidden">
                            <Home />
                        </div>
                    } />
                </Routes>
            </div>
            <Footer />
        </main>
    )
}