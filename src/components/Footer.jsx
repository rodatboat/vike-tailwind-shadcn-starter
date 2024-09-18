import logoUrl from '/android-chrome-512x512.png'

const CONTACT_EMAIL = `${import.meta.env.VITE_APP_CONTACT_EMAIL}`

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex gap-2 justify-center md:justify-start items-center" href="/#">
                            <img alt="Footer Image" fetchpriority="high"
                                width="1080" height="1080" decoding="async" data-nimg="1" className="size-6" style={{ color: "transparent" }}
                                src={logoUrl} />
                            <strong className='font-extrabold tracking-tight text-base md:text-lg'>Vike + Spring Starter</strong>
                        </a>
                        <p className='mt-3 text-sm opacity-80 leading-relaxed'>
                            Build faster products.
                            <br />
                            {CONTACT_EMAIL}
                            {/* Copyright © 2024 - All rights reserved */}
                        </p>
                    </div>

                    <div className='flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left'>
                        <FooterSection title="Links">
                            <a className='cursor-pointer hover:underline' href='/'>Back to top</a>
                            <a className='cursor-pointer hover:underline' href='#faq'>FAQ</a>
                            <a className='cursor-pointer hover:underline' href='#pricing'>Pricing</a>
                            {/* <a className='cursor-pointer hover:underline' href='#tryforfree'>Try for free</a> */}
                        </FooterSection>
                        <FooterSection title="Legal">
                            <a className='cursor-pointer hover:underline' href='/#'>Terms of services</a>
                            <a className='cursor-pointer hover:underline' href='/#'>Privacy policy</a>
                        </FooterSection>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export function FooterSection({ children, title }) {
    return (
        <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
            <div className='upper-case opacity-50 font-semibold text-base-content tracking-widest text-sm md:text-left mb-3'>
                {title}
            </div>

            <div className='flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm'>
                {children}
            </div>
        </div>
    )
}