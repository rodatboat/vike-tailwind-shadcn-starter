import { useState } from 'react';
import { Asterisk, BookmarkCheck, Library, MonitorSmartphone, ReceiptText } from 'lucide-react';

const features = [
    {
        title: "Feature 1",
        description: "Feature description 1.",
        image: null,
        icon: <BookmarkCheck className='size-4' />
    },
    {
        title: "Feature 2",
        description: "Feature description 2.",
        image: null,
        icon: <ReceiptText className='size-4' />
    },
    {
        title: "Feature 3",
        description: "Feature description 3.",
        image: null,
        icon: <Asterisk className='size-4' />
    },
    {
        title: "Feature 4",
        description: "Feature description 4.",
        image: null,
        icon: <Library className='size-4' />
    },
    {
        title: "Feature 5",
        description: "Feature description 5.",
        image: null,
        icon: <MonitorSmartphone className='size-4' />
    }
]

export default function Features({ data }) {
    data = features;

    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto">
            <div className="px-8">
                <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-12 md:mb-20 text-center md:text-left">
                    <span className="text-5xl lg:text-7xl text-primary">10x. Faster</span>
                    <br />
                    with Vike + Spring
                </h2>

                <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-5 lg:gap-20">
                        <ul className="w-full col-span-2">
                            {data.map((feature, index) => <FeaturesItem key={index} {...feature}
                                expanded={activeFeature === index}
                                onClick={() => setActiveFeature(index)} />)}
                        </ul>

                        <div className="col-span-3 max-w-3xl w-full relative mx-auto">
                            <section className="max-w-screen-lg mx-auto h-full flex items-center">
                                <img className="w-full rounded relative shadow-md"
                                    fetchpriority="high"
                                    decoding="async" data-nimg="1"
                                    src={data[activeFeature].image} />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function FeaturesItem({ title, description, expanded, icon, onClick }) {
    const expandedTrue = {
        maxHeight: "49px",
        opacity: 1
    }

    const expandedFalse = {
        maxHeight: 0,
        opacity: 0
    }

    return (
        <li>
            <button onClick={onClick} className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg hover:text-primary transition-all">
                {icon}
                {title}
            </button>

            <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden -mt-2" style={expanded ? expandedTrue : expandedFalse}>
                <div className="pb-5 leading-relaxed text-lg opacity-80">
                    {description}
                </div>
            </div>
        </li>
    )
}