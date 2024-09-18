import { Check, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { CheckoutDialog } from "./CheckoutDialog";

export default function PricingOption({ pricingData, popular = false }) {

    return (
        <>
            <div className="relative w-full">
                {popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <Badge className="text-primary-foreground font-semibold border-0 bg-primary">POPULAR</Badge>
                </div>}

                { popular && <div className="absolute -inset-[1px] rounded-lg bg-primary z-10" />}
                <div className="relative flex flex-col gap-5 lg:gap-8 z-10 bg-secondary p-8 rounded-lg h-full">
                    <div className="flex justify-between items-center gap-4">
                        <div>
                            <p className="text-lg lg:text-xl font-bold ">{pricingData.title}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex flex-col justify-end mb-[4px] text-lg ">
                            <p className="relative opacity-80">
                                <span className="absolute bg-primary h-[1.5px] inset-x-0 top-[48%]"></span>
                                <span className="text-secondary-foreground">${(pricingData.old_price/100).toFixed(0)}</span>
                            </p>
                        </div>
                        <p className="text-5xl tracking-tight font-extrabold">${(pricingData.price/100).toFixed(0)}</p>
                        <div className="flex flex-col justify-end mb-[4px]">
                            <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
                        </div>
                    </div>
                    <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                        {pricingData.pros.map((pro, index) => (
                            <li key={index} className="flex items-center gap-2 text-secondary-foreground">
                                <Check className="size-4" />
                                <span className="">{pro}</span>
                            </li>))}
                        {pricingData.cons.map((con, index) => (
                            <li key={index} className="flex items-center gap-2 text-secondary-foreground/30">
                                <X className="size-4" />
                                <span className="">{con}</span>
                            </li>))}
                    </ul>

                    <div className="space-y-2">
                        <CheckoutDialog {...pricingData} />
                        <p className="flex items-center justify-center gap-2 text-sm text-center text-secondary-foreground/80 font-medium relative">30-day access to the course</p>
                    </div>
                </div>
            </div>
        </>
    )
}