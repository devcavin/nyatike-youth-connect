import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
/* import CompanyLogo from './components/CompanyLogo'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection' */
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
        <About />
        {/* <CompanyLogo />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection /> */}
      </div>
      <Footer />
    </main>
  )
}

export default App
