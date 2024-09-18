import { Quote } from "lucide-react";
import { Badge } from "./ui/badge";
import logoUrl from '/android-chrome-512x512.png'

export default function CustomerQuote({name, quote, badge = null, imgUrl = logoUrl}) {
    return (
        <div className="space-y-4 mx-auto max-w-md mt-24">
            <Quote className="size-8" />
            <p className="md:text-lg leading-relaxed">{quote}</p>
            <div className="flex items-center gap-2">
                <img alt="Testimonial" loading="lazy" width="48" height="48" decoding="async" data-nimg="1"
                    className="w-10 h-10 rounded-full object-cover" style={{ color: "transparent" }}
                    src={imgUrl} />
                <p>{name}</p>
                {badge && <Badge variant={"outline"} className="text-primary border-primary">{badge}</Badge>}
            </div>
        </div>
    )
}