import { usePageContext } from "@/lib/usePageContext";
import CustomerQuote from "./CustomerQuote";
import DiscountCTA from "./DiscountCTA";
import PricingOption from "./PricingOption";
import femaleTestimonial from '/female_testimonial.jpg';

const quote = {
    name: "Gary",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    badge: "Built a SaaS",
    imgUrl: femaleTestimonial
}

export default function PricingHero({ }) {
    const { data } = usePageContext();

    return (
        <section id="catalogue" className="overflow-hidden">
            <div className="py-24 pb-0 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="font-medium text-primary mb-8">Pricing</p>
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">Nam semper eros velit, sit amet sollicitudin lectus elementum eu. Quisque efficitur arcu quis mauris imperdiet, sed tincidunt erat hendrerit!
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