import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const APP_URI = `${import.meta.env.VITE_APP_URI}`


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
                        <a href="mailto:contact@abamock.com" target="_blank" className="underline font-semibold text-base-content">
                            email
                        </a>.
                    </div>
                </div>

                <ul className="basis-1/2">
                    <FAQItem title={"What if I don’t pass the exam?"}>
                        <div className="space-y-2 leading-relaxed">
                            <p>The exams & quizzes are designed for study purposes, so there is no pass or fail. After completing the exam, you'll be able to review your performance. The results are divided by tasks, allowing you to identify the areas that need more attention.</p>
                        </div>
                    </FAQItem>

                    <FAQItem title={"How long does it take to complete an exam?"}>
                        <div className="space-y-2 leading-relaxed">
                            <p>Exams give you up to 4 hours to finish, while quizzes range from 30 to 60 minutes (with no hard limit), depending on the number of questions.</p>
                        </div>
                    </FAQItem>

                    <FAQItem title={"How many questions are on the exam?"}>
                        <div className="space-y-2 leading-relaxed">
                            <p>We currently offer over 5,000 practice questions and continuously update and add more.</p>
                        </div>
                    </FAQItem>

                    <FAQItem title={"What task list items do your questions cover?"}>
                        <div className="space-y-2 leading-relaxed">
                            <p>Our questions cover all task lists of the RBT & BCBA exams, from A to I.</p>
                        </div>
                    </FAQItem>

                    <FAQItem title={"How does it work?"}>
                        <div className="space-y-2 leading-relaxed">
                            <p>Simply purchase a package, and an access code will be sent to your email inbox. Once you receive your access code, you can activate it and register your account by 
                            {" "}
                            <a href={`${APP_URI}/activate`} className="underline font-semibold">clicking here.</a></p>
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