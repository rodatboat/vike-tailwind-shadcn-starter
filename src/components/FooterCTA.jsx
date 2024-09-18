import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "./ui/link";

const APP_URI = `${import.meta.env.VITE_APP_URI}`


export default function FooterCTA() {
    return (
        <section id="#tryforfree" className="">
            <div className="pb-32 pt-16 px-8 max-w-3xl mx-auto flex flex-col items-center gap-8 md:gap-12">
                <div className="text-center">
                    <Star className="fill-base-content w-8 h-8 md:w-12 md:h-12 rotate-12 ml-auto md:-mr-8" />
                    <h2 className="relative font-bold text-3xl md:text-5xl tracking-tight mt-4 mb-4 md:mb-8 ">Vestibulum consequat eros quis augue vulputate?</h2>
                    <p className="relative text-lg text-base-content/80">Donec at nisl efficitur, pellentesque tortor ut, malesuada felis!</p>
                </div>
                <Link href={`${APP_URI}`}>
                    <Button className="px-10"><Star className="mr-2 size-4 fill-secondary" />Check us out</Button>
                </Link>
            </div>
        </section>
    )
}