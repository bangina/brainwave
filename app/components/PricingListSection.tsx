"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ToggleSwitch from "./ToggleSwitch";
import PricingCard from "./PricingCard";

const benefitsMap = {
  benefit1: "Commercial License",
  benefit2: "100+ HTML UI Elements",
  benefit3: "01 Domain Support",
  benefit4: "6 Month Premium Support",
  benefit5: "Lifetime Updates",
};
const pricingList = [
  {
    name: "starter",
    price: 19,
    benefitList: [
      { id: "benefit1", available: true, description: benefitsMap.benefit1 },
      { id: "benefit2", available: true, description: benefitsMap.benefit2 },
      { id: "benefit3", available: true, description: benefitsMap.benefit3 },
      { id: "benefit4", available: false, description: benefitsMap.benefit4 },
      { id: "benefit5", available: false, description: benefitsMap.benefit5 },
    ],
  },
  {
    name: "standard",
    price: 29,
    benefitList: [
      { id: "benefit1", available: true, description: benefitsMap.benefit1 },
      { id: "benefit2", available: true, description: benefitsMap.benefit2 },
      { id: "benefit3", available: true, description: benefitsMap.benefit3 },
      { id: "benefit4", available: true, description: benefitsMap.benefit4 },
      { id: "benefit5", available: false, description: benefitsMap.benefit5 },
    ],
  },
  {
    name: "premium",
    price: 39,
    benefitList: [
      { id: "benefit1", available: true, description: benefitsMap.benefit1 },
      { id: "benefit2", available: true, description: benefitsMap.benefit2 },
      { id: "benefit3", available: true, description: benefitsMap.benefit3 },
      { id: "benefit4", available: true, description: benefitsMap.benefit4 },
      { id: "benefit5", available: true, description: benefitsMap.benefit5 },
    ],
  },
];

function PricingListSection() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="flex flex-col items-center">
      <SectionTitle
        title="Pricing & Plans"
        description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
      />
      <ToggleSwitch isYearly={isYearly} setIsYearly={setIsYearly} />
      <ul className="flex gap-[32px] mt-[53px] mb-[116px]">
        {pricingList.map((pricingItem) => (
          <PricingCard pricingItem={pricingItem} key={pricingItem.name} />
        ))}
      </ul>
    </section>
  );
}

export default PricingListSection;
