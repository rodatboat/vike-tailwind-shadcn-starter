export { Page }

import { useEffect } from 'react';
import { usePageContext } from '@/lib/usePageContext';
import LandingHero from '@/components/LandingHero';
import PricingHero from '@/components/PricingHero';
import FooterCTA from '@/components/FooterCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const STRIPE_P_KEY = `${import.meta.env.VITE_APP_STRIPE_P_KEY}`;

function Page() {
  const { data } = usePageContext();
  const stripePromise = loadStripe(STRIPE_P_KEY);


  useEffect(() => {
  }, [])
  return (
    <>
      <LandingHero />
      {/* NEED MORE HERE */}
      <Features />
      <FAQ />
      <Elements stripe={stripePromise}>
        <PricingHero />
      </Elements>
      <FooterCTA />
      <Footer />
    </>
  )
}
