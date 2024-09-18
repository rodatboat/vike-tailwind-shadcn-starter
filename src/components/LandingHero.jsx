import { Star } from 'lucide-react'
import { Button } from './ui/button'
import logoUrl from '/android-chrome-512x512.png'
import landingUrl from '/landing.webp'
import DiscountCTA from './DiscountCTA'
import { useEffect, useState } from 'react'
import { FREE_QUIZ } from '@/lib/constants'
import { Link } from './ui/link'

const APP_URI = `${import.meta.env.VITE_APP_URI}`

export default function LandingHero({ }) {
    const [role, setRole] = useState(0)
    const roles = ["Therapists", "Analysts", "Educators", "Students"]

    useEffect(() => {
        setTimeout(() => {
            let newIndex = role === roles.length - 1 ? 0 : role + 1
            setRole(newIndex)
        }, 1500)
    }, [role])
    return (
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
            <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <img alt="ABAMock Logo" fetchpriority="high"
                    decoding="async" data-nimg="1" className="size-28 max-w-xl mx-auto md:mr-auto md:ml-0 -mb-16" style={{ color: "transparent" }}
                    src={logoUrl} />
                <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
                    <span className="relative">Mock exams for</span>
                    <span className="whitespace-nowrap relative ">
                        <span className="mr-3 sm:mr-4 md:mr-5">all, </span>
                        <span className="relative whitespace-nowrap">
                            <span className="absolute bg-primary -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1">
                            </span>
                            <span className="relative text-primary-foreground">{roles[role]}</span>
                        </span>
                    </span>
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">
                    ABAMock is a mock exam platform that helps you prepare for your next exam. Get feedback on tasks that need improvement, and ace your exam!
                    {" "}
                    <a href={`${APP_URI}/quiz/${FREE_QUIZ}`} className='underline cursor-pointer hover:text-primary transition-all ease-in-out'>Click here to take a free mock exam.</a>
                </p>

                <div className="space-y-4">
                    <div className='flex flex-col md:flex-row md:gap-2 items-center'>
                        <Link href="#catalogue"><Button className="px-10"><Star className="mr-2 size-4 fill-secondary" />View Available Mock Exams</Button></Link>
                        <p>or</p>
                        <Link href={`${APP_URI}/login/`}><Button variant="outline" className="px-10 bg-secondary/50">Login to existing account</Button></Link>
                    </div>
                    <DiscountCTA />
                </div>
            </div>
            <div className="relative max-md:-m-4 lg:w-full">
                <img alt="ABAMock Logo" fetchpriority="high"
                    width="1080" height="1080" decoding="async" data-nimg="1" className="w-full max-w-xl ml-auto" style={{ color: "transparent" }}
                    src={landingUrl} />
            </div>
        </section>
    )
}