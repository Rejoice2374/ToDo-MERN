"use client"

import Logo from "@/assets/Logo.png"
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6"

export function FooterSection() {
  const tym = new Date()
  const year = tym.getFullYear()
  return (
    <footer className="flex flex-col">
      <div className="mx-auto flex w-full max-w-340 flex-col items-start justify-between gap-8 px-5 py-10 md:flex-row md:gap-0 md:py-17.5">
        {/* Left Section: Logo, Description, Social Links */}
        <div className="flex flex-col items-start justify-start gap-4 p-4 md:p-8">
          <div className="flex items-stretch justify-center gap-3">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <a href="#" className="group flex items-center gap-2">
                <img
                  src={Logo}
                  alt="HabitCheck Logo"
                  className="w-6 object-cover md:w-8"
                />
                <h1 className="text-[20px] md:text-[24px]">
                  Habit<span className="font-bold">Check</span>
                </h1>
              </a>
            </div>
          </div>
          <p className="text-left text-sm leading-4.5 font-medium text-foreground/90">
            Build better Habits one day at a time.
          </p>
          <div className="flex items-start justify-start gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-4 w-4 items-center justify-center"
            >
              <FaXTwitter className="h-full w-full text-muted-foreground" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-4 w-4 items-center justify-center"
            >
              <FaGithub className="h-full w-full text-muted-foreground" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-4 w-4 items-center justify-center"
            >
              <FaLinkedin className="h-full w-full text-muted-foreground" />
            </a>
          </div>
        </div>
        {/* Right Section: Product, Company, Resources */}
        <div className="grid w-full grid-cols-2 gap-8 p-4 md:w-auto md:grid-cols-3 md:gap-12 md:p-8">
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm leading-5 font-medium text-muted-foreground">
              Product
            </h3>
            <div className="flex flex-col items-start justify-end gap-2">
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Features
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Integrations
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Real-time Previews
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Multi-Agent Coding
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm leading-5 font-medium text-muted-foreground">
              Company
            </h3>
            <div className="flex flex-col items-start justify-center gap-2">
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                About us
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Our team
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Brand
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-sm leading-5 font-medium text-muted-foreground">
              Resources
            </h3>
            <div className="flex flex-col items-start justify-center gap-2">
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Terms of use
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                API Reference
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Community
              </a>
              <a
                href="#"
                className="text-sm leading-5 font-normal text-foreground hover:underline"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div
        className={`item-start lg:mx[-80px] md:mx[-120px] relative flex flex-col justify-center gap-5! border-t border-muted/50 px-5 py-6 md:flex-row md:items-center md:gap-0 md:px-8`}
      >
        <div className="divider"></div>
        <a
          href="https://github.com/Rejoice2374/"
          className="font-work text-celeste self-stretch text-[12px] leading-[13.2px]"
        >
          Ⓒ Favochino Tech {year}.
        </a>
      </div>
    </footer>
  )
}
