import { Header } from '@/components/ui/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { ValidationSection } from '@/components/sections/ValidationSection'
import { FormSection } from '@/components/sections/FormSection'
import { FooterSection } from '@/components/sections/FooterSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ValidationSection />
        <FormSection />
      </main>
      <FooterSection />
    </>
  )
}
