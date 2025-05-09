"use state";
import React, { useState } from "react";

const faqData = [
  {
    question: "What breeds of broiler chickens do you raise?",
    answer:
      "We primarily raise fast-growing, high-yield broiler breeds such as Cobb 500 and Ross 308, known for their excellent feed conversion, meat quality, and disease resistance.",
  },
  {
    question: "How do you ensure the health of your chickens?",
    answer:
      "Our chickens are raised in biosecure facilities, vaccinated against common diseases, and fed high-quality, antibiotic-free feed. Regular veterinary checks ensure optimal health.",
  },
  {
    question: "Do you use antibiotics or hormones in your chickens?",
    answer:
      "No, we do not use growth hormones (illegal in poultry farming). Antibiotics are only used under veterinary supervision if birds are sick, following strict withdrawal periods before processing.",
  },
  {
    question: "What do you feed your broiler chickens?",
    answer:
      "Our chickens are fed a nutritionally balanced diet of corn, soybean meal, vitamins, and minerals to promote healthy growth and meat quality. Feed is free from harmful additives.",
  },
  {
    question: "How long does it take for broilers to reach market weight?",
    answer:
      "Typically, our broilers reach market weight (around 2.5–3 kg) in 5–6 weeks, depending on breed and farming conditions.",
  },
  {
    question: "Can I buy live chickens directly from your farm?",
    answer:
      "Yes, we sell live broilers in bulk to wholesalers, retailers, and individual customers. Contact us for pricing and minimum order requirements.",
  },
  {
    question: "Do you offer processed (dressed) chicken?",
    answer:
      "Yes! We provide fresh and frozen dressed chicken, cut into preferred portions. Our processing facility meets all food safety and hygiene standards.",
  },
  {
    question: "What are your delivery options?",
    answer:
      "We offer delivery within and outside Nigeria for bulk orders. Pickup is also available at our farm or outlets. Delivery fees depend on distance and order size.",
  },
  {
    question: "How do you handle waste and environmental sustainability?",
    answer:
      "We follow eco-friendly practices, including proper manure management (composting/recycling), odor control, and water conservation to minimize environmental impact.",
  },
  {
    question: " How can I start a partnership or contract farming with you?",
    answer:
      "We work with small-scale farmers through outgrower schemes. Contact us for details on training, supply of chicks, feed, and buy-back agreements.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col  items-center justify-center p-5">
      <div className="space-y-4 md:w-2/3 w-full">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-md shadow-sm w-full">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-left text-gray-800 px-4 py-3 font-bold bg-gray-100 hover:bg-gray-200"
            >
              <span>{item.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-black">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
