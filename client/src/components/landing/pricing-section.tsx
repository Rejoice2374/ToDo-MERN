"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Free",
      monthlyPrice: "$0",
      annualPrice: "$0",
      description: "Perfect for getting started with building better habits.",
      features: [
        "Track up to 3 habits",
        "Daily streak tracking",
        "Basic progress statistics",
        "Simple reminders",
        "Community support",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
    },

    {
      name: "Pro",
      monthlyPrice: "$9",
      annualPrice: "$89",
      popular: true,
      description:
        "Ideal for users serious about productivity and consistency.",
      features: [
        "Unlimited habit tracking",
        "Advanced analytics & insights",
        "Custom reminders & schedules",
        "Weekly progress reports",
        "Priority support",
      ],
      buttonText: "Upgrade to Pro",
      buttonClass:
        "bg-primary text-primary-foreground hover:bg-primary-foreground/10 shadow-lg",
    },

    {
      name: "Team",
      monthlyPrice: "$19",
      annualPrice: "$189",
      description:
        "Built for teams and accountability partners working together.",
      features: [
        "Shared habit groups",
        "Team progress dashboard",
        "Accountability challenges",
        "Collaborative goal tracking",
        "Premium customer support",
      ],
      buttonText: "Start Team Plan",
      buttonClass:
        "bg-zinc-300 text-secondary-foreground hover:bg-zinc-400 shadow-lg",
    },
  ]

  return (
    <section className="my-0 flex w-full flex-col items-center justify-start overflow-hidden px-5 py-8 md:py-14">
      <div className="relative flex flex-col items-center justify-center gap-2 self-stretch py-0">
        <div className="flex flex-col items-center justify-start gap-4">
          <h2 className="text-center text-4xl leading-tight font-semibold text-foreground md:text-5xl md:leading-10">
            Pricing built for every developer
          </h2>
          <p className="self-stretch text-center text-sm leading-tight font-medium text-muted-foreground">
            Choose a plan that fits your coding workflow, from individuals
            starting out to <br /> growing professionals and large
            organizations.
          </p>
        </div>
        <div className="pt-4">
          <div className="flex items-center justify-start gap-1 rounded-lg bg-muted p-0.5 outline-1 -outline-offset-1 outline-[#0307120a] md:mt-0">
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-start justify-start gap-2 rounded-md py-1 pr-1 pl-2 ${isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
            >
              <span
                className={`text-center text-sm leading-tight font-medium ${isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Annually
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`flex items-start justify-start rounded-md px-2 py-1 ${!isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
            >
              <span
                className={`text-center text-sm leading-tight font-medium ${!isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Monthly
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-275 flex-col items-start justify-start gap-4 self-stretch px-5 md:flex-row md:gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-1 flex-col items-start justify-start gap-6 overflow-hidden rounded-xl p-4 ${plan.popular ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)] md:scale-110" : "bg-linear-to-b from-gray-900/5 to-gray-900/5 dark:from-gray-50/5 dark:to-gray-50/0"}`}
            style={
              plan.popular
                ? {}
                : {
                    outline: "1px solid hsl(var(--border))",
                    outlineOffset: "-1px",
                  }
            }
          >
            <div className="flex flex-col items-start justify-start gap-6 self-stretch">
              <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                <div
                  className={`h-5 w-full text-sm leading-tight font-medium ${plan.popular ? "text-primary-foreground" : ""}`}
                >
                  {plan.name}
                  {plan.popular && (
                    <div className="from-primary-light/50 to-primary-light mt-0 ml-2 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white bg-linear-to-b px-2 py-0.5">
                      <div className="text-center text-xs leading-tight font-normal wrap-break-word text-sidebar-primary">
                        Popular
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="flex items-center justify-start gap-1.5">
                    <div
                      className={`relative flex h-10 items-center text-3xl leading-10 font-medium ${plan.popular ? "text-primary-foreground" : ""}`}
                    >
                      <span className="invisible">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: isAnnual ? 1 : 0,
                          transform: `scale(${isAnnual ? 1 : 0.8})`,
                          filter: `blur(${isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={!isAnnual}
                      >
                        {plan.annualPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: !isAnnual ? 1 : 0,
                          transform: `scale(${!isAnnual ? 1 : 0.8})`,
                          filter: `blur(${!isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={isAnnual}
                      >
                        {plan.monthlyPrice}
                      </span>
                    </div>
                    <div
                      className={`text-center text-sm leading-tight font-medium ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                    >
                      /month
                    </div>
                  </div>
                  <div
                    className={`self-stretch text-sm leading-tight font-medium ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>
              <Button
                className={`flex cursor-pointer items-center justify-center self-stretch rounded-[40px] px-5 py-2 ${plan.buttonClass}`}
              >
                <div className="flex items-center justify-center gap-2 px-1.5">
                  <span
                    className={`text-center text-sm leading-tight font-medium ${plan.name === "Pro" ? "text-primary-foreground" : "text-gray-800"}`}
                  >
                    {plan.buttonText}
                  </span>
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 self-stretch">
              <div
                className={`self-stretch text-sm leading-tight font-medium ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {plan.name === "Free"
                  ? "Get Started today:"
                  : "Everything in Free +"}
              </div>
              <div className="flex flex-col items-start justify-start gap-3 self-stretch">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-start gap-2 self-stretch"
                  >
                    <div className="flex h-4 w-4 items-center justify-center">
                      <Check
                        className={`h-full w-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div
                      className={`text-left text-sm leading-tight font-normal ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
