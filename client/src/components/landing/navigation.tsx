"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "@/assets/Logo.png"

const navLinks = [
  { name: "Capabilities", href: "#features" },
  { name: "Process", href: "#how-it-works" },
  { name: "Infra", href: "#infra" },
  { name: "Integrations", href: "#integrations" },
  { name: "Security", href: "#security" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 right-4 left-4" : "top-0 right-0 left-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "max-w-300 rounded-2xl border border-foreground/10 bg-background/80 shadow-lg backdrop-blur-xl"
            : "max-w-350 bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 transition-all duration-500 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center justify-center">
            <a href="#" className="group flex items-center gap-2">
              <img
                src={Logo}
                alt="HabitCheck Logo"
                className="w-6 object-cover md:w-8"
              />
              <h1 className="text-[16px] md:text-[24px]">
                Habit<span className="font-bold">Check</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative text-sm transition-colors duration-300 ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-foreground" : "bg-white"}`}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/auth?type=sign-up"
              className={`transition-all duration-500 ${isScrolled ? "text-xs text-foreground/70 hover:text-foreground" : "text-sm text-white/70 hover:text-white"}`}
            >
              Sign in
            </Link>
            <Button
              size="sm"
              className={`rounded-full transition-all duration-500 ${isScrolled ? "h-8 bg-foreground px-4 text-xs text-background hover:bg-foreground/90" : "bg-white px-6 text-black hover:bg-white/90"}`}
              onClick={() => navigate("/auth?type=sign-up")}
            >
              Deploy agent
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-50 p-2 transition-colors duration-500 md:hidden ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-background transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex flex-1 flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-5xl text-foreground transition-all duration-500 hover:text-muted-foreground ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div
            className={`flex gap-4 border-t border-foreground/10 pt-8 transition-all duration-500 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button
              variant="outline"
              className="h-14 flex-1 rounded-full text-base"
              onClick={() => {
                setIsMobileMenuOpen(false)
                navigate("/auth?type=sign-in")
              }}
            >
              Sign in
            </Button>
            <Button
              className="h-14 flex-1 rounded-full bg-foreground text-base text-background"
              onClick={() => {
                navigate("/auth?type=sign-up")
                setIsMobileMenuOpen(false)
              }}
            >
              Deploy agent
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
