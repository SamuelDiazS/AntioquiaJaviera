import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import GroupsSection from './components/GroupsSection.jsx'
import ProductsSection from './components/ProductsSection.jsx'
import RotationSection from './components/RotationSection.jsx'
import TimelineSection from './components/TimelineSection.jsx'
import InfoSection from './components/InfoSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-crema">
      <Navbar />
      <main>
        <Hero />
        <GroupsSection />
        <ProductsSection />
        <RotationSection />
        <TimelineSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}
