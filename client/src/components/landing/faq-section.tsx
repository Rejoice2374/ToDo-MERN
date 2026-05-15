"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is HabitCheck?",
    answer:
      "HabitCheck is a habit and productivity tracking app designed to help you build consistency, stay accountable, and achieve your personal goals through daily tracking and insights.",
  },

  {
    question: "Can I use HabitCheck for free?",
    answer:
      "Yes. HabitCheck offers a free plan that lets you track habits, monitor streaks, and access essential productivity features without any cost.",
  },

  {
    question: "How do streaks work?",
    answer:
      "Every time you complete a habit for the day, your streak increases. Missing a day resets the streak, helping motivate you to stay consistent with your routines.",
  },

  {
    question: "Can I track multiple habits at once?",
    answer:
      "Absolutely. You can create and manage multiple habits, organize them into categories, and monitor your progress from a single dashboard.",
  },

  {
    question: "Does HabitCheck send reminders?",
    answer:
      "Yes. HabitCheck allows you to set custom reminders and notifications so you never forget to complete your daily habits.",
  },

  {
    question: "Is my progress data محفوظ and secure?",
    answer:
      "Yes. Your habit data and personal information are securely stored and protected to ensure your privacy and safety.",
  },

  {
    question: "Can I use HabitCheck on mobile devices?",
    answer:
      "Yes. HabitCheck is designed to work smoothly across desktop, tablet, and mobile devices for easy tracking wherever you are.",
  },

  {
    question: "Who is HabitCheck best suited for?",
    answer:
      "HabitCheck is perfect for students, professionals, fitness enthusiasts, or anyone looking to build positive routines and stay productive.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full cursor-pointer overflow-hidden rounded-[10px] bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] outline-1 -outline-offset-1 outline-border transition-all duration-500 ease-out`}
      onClick={handleClick}
    >
      <div className="flex w-full items-center justify-between gap-5 px-5 py-4.5 pr-4 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-base leading-6 font-medium wrap-break-word text-foreground">
          {question}
        </div>
        <div className="flex items-center justify-center">
          <ChevronDown
            className={`text-muted-foreground-dark h-6 w-6 transition-all duration-500 ease-out ${isOpen ? "scale-110 rotate-180" : "scale-100 rotate-0"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "translate-y-0 pt-2 pb-4.5" : "-translate-y-2 pt-0 pb-0"}`}
        >
          <div className="text-sm leading-6 font-normal wrap-break-word text-foreground/80">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-5 pt-16.5 pb-20 md:pb-40">
      <div className="absolute top-37.5 left-1/2 z-0 h-125 w-75 origin-top-left -translate-x-1/2 rotate-[-33.39deg] bg-primary/10 blur-[100px]" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 self-stretch pt-8 pb-8 md:pt-14 md:pb-14">
        <div className="flex flex-col items-center justify-start gap-4">
          <h2 className="w-full max-w-108.75 text-center text-4xl leading-10 font-semibold wrap-break-word text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-sm leading-[18.20px] font-medium wrap-break-word text-muted-foreground">
            Everything you need to know about HabitCheck and how it can
            transform your development workflow
          </p>
        </div>
      </div>
      <div className="relative z-10 flex w-full max-w-150 flex-col items-start justify-start gap-4 pt-0.5 pb-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  )
}
