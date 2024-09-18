import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const APP_URI = `${import.meta.env.VITE_APP_URI}`
const CONTACT_EMAIL = `${import.meta.env.VITE_APP_CONTACT_EMAIL}`


export default function FAQ() {
    return (
        <section id="faq" className="">
            <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                    <p className="sm:text-4xl text-3xl font-extrabold text-base-content mb-8">
                        Frequently Asked Questions
                    </p>
                    <div>
                        Have another question? Contact us by
                        {" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} target="_blank" className="underline font-semibold text-base-content">
                            email
                        </a>.
                    </div>
                </div>

                <ul className="basis-1/2">
                    <FAQItem title={"Lorem ipsum?"}>
                        <div className="space-y-2 leading-relaxed">
                            <p>Nam semper eros velit, sit amet sollicitudin lectus elementum eu. Quisque efficitur arcu quis mauris imperdiet, sed tincidunt erat hendrerit. Duis ultrices lectus tellus, eu bibendum lectus ultricies ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </FAQItem>

                    <FAQItem title={"Lorem ipsum?"}>
                        <div className="space-y-2 leading-relaxed">
                            <p>Nam semper eros velit, sit amet sollicitudin lectus elementum eu. Quisque efficitur arcu quis mauris imperdiet, sed tincidunt erat hendrerit. Duis ultrices lectus tellus, eu bibendum lectus ultricies ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                {" "}
                                <a href={`${APP_URI}/`} className="underline font-semibold">turpis egestas.</a></p>
                        </div>
                    </FAQItem>
                </ul>
            </div>
        </section>
    )
}

const expandedTrue = {
    maxHeight: "286px",
    opacity: 1
}

const expandedFalse = {
    maxHeight: 0,
    opacity: 0
}

export function FAQItem({ children, title }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <li>
            <button onClick={() => setExpanded(!expanded)}
                expanded={expanded ? "true" : "false"}
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg">
                <span className={`flex-1 text-base-content ${expanded ? "text-primary" : ""}`}>
                    {title}
                </span>
                {expanded ? <Minus className="size-6" /> : <Plus className="size-6 " />}
            </button>
            <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={expanded ? expandedTrue : expandedFalse}>
                <div className="pb-5 leading-relaxed">
                    {children}
                </div>
            </div>
        </li>
    )
}