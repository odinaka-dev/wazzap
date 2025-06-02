"use client";

import React from "react";
import { FREQUENTLYASKEDHELPERS } from "@/helpers/frequently.helpers";
import { Accordion, AccordionContent } from "@radix-ui/react-accordion";
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useFaqStore } from "@/Zustand/slice/ui.slice";

export default function FrequentlyAskedQuestions() {
  const { openItem, toggle } = useFaqStore();

  return (
    <div className="faq_section max-w-[80%] mx-auto flex flex-col items-center justify-center my-12">
      <div className="faq_header">
        <h1 className="text-3xl font-semibold capitalize">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full max-w-2xl mx-auto mt-6 space-y-4">
        {FREQUENTLYASKEDHELPERS.map((items, index) => (
          <Accordion
            type="single"
            collapsible
            key={index}
            className="border-b py-3"
          >
            <AccordionItem value={`item-${index}`} className="w-full">
              <AccordionTrigger className="w-full flex justify-between items-center text-left font-semibold text-lg">
                <p className="w-full">{items.question}</p>
                <p onClick={() => toggle(`item-${index}`)}>
                  {openItem === `item-${index}` ? (
                    <Minus className="h-4 w-4 transition-transform duration-200 accordion-chevron font-bold" />
                  ) : (
                    <Plus className="h-4 w-4 transition-transform duration-200 accordion-chevron font-bold" />
                  )}
                </p>
              </AccordionTrigger>
              <AccordionContent className="w-full text-sm text-zinc-600 mt-2 leading-relaxed">
                {items.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
