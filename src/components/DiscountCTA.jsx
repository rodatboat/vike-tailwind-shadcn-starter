import { Gift } from "lucide-react";

export default function DiscountCTA({ }) {
    return (
        <p className="text-sm md:text-base flex justify-center items-center gap-2">
            <Gift className="size-4 text-primary" />
            <span className=''>
                <span className="text-primary">20% off</span>
                {" "}
                for the first 100 customers (87 left)
            </span>
        </p>
    )
}  