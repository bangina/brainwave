"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ToggleSwitch from "./ToggleSwitch";

const benefitsMap = {
  benefit1: "benefit1 description",
  benefit2: "benefit2 description",
  benefit3: "benefit3 description",
};
const pricingList = [
  {
    name: "A",
    price: 19,
    benefitList: [
      { id: "benefit1", available: false, description: benefitsMap.benefit1 },
      { id: "benefit2", available: false, description: benefitsMap.benefit2 },
      { id: "benefit3", available: false, description: benefitsMap.benefit3 },
    ],
  },
  {
    name: "B",
    price: 29,
    benefitList: [
      { id: "benefit1", available: true, description: benefitsMap.benefit1 },
      { id: "benefit2", available: false, description: benefitsMap.benefit2 },
      { id: "benefit3", available: false, description: benefitsMap.benefit3 },
    ],
  },
  {
    name: "C",
    price: 39,
    benefitList: [
      { id: "benefit1", available: true, description: benefitsMap.benefit1 },
      { id: "benefit2", available: true, description: benefitsMap.benefit2 },
      { id: "benefit3", available: false, description: benefitsMap.benefit3 },
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
          <li key={pricingItem.name}>
            {pricingItem.name}
            <br />
            {pricingItem.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PricingListSection;
