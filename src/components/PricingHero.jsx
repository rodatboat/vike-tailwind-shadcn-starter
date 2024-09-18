import { usePageContext } from "@/lib/usePageContext";
import CustomerQuote from "./CustomerQuote";
import DiscountCTA from "./DiscountCTA";
import PricingOption from "./PricingOption";
import femaleTestimonial from '/female_testimonial.jpg';

const quote = {
    name: "Amanda",
    quote: "The mock exams provided all the essential information for the exam! I relied on ABAMock for both the BCaBA and BCBA exams and successfully passed them both on my first attempt.",
    badge: "BCBA",
    imgUrl: femaleTestimonial
}

export default function PricingHero({ }) {
    const { data } = usePageContext();

    return (
        <section id="catalogue" className="overflow-hidden">
            <div className="py-24 pb-0 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="font-medium text-primary mb-8">Pricing</p>
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">Save hours of study, master the concepts, and pass with confidence!
                    </h2>
                    <DiscountCTA />
                </div>

                <div id="pricing" className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {data.packages.map((p, index) => <PricingOption key={index} pricingData={p} popular={p.popular} />)}
                </div>

                <CustomerQuote {...quote} />
            </div>
        </section>
    )
}