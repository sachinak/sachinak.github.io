import VerticalSidebar from '../components/VerticalSidebar'
import HeroSection from '../sections/HeroSection'
import FeaturedProjectsSection from '../sections/FeaturedProjectsSection'
import ExpertiseSection from '../sections/ExpertiseSection'
import AboutSection from '../sections/AboutSection'
import ContactCTASection from '../sections/ContactCTASection'

export default function IndexPage() {
  return (
    <>
      <VerticalSidebar text="AI & SOFTWARE ENGINEER" />
      <HeroSection />
      <FeaturedProjectsSection />
      <ExpertiseSection />
      <AboutSection />
      <ContactCTASection />
    </>
  )
}
