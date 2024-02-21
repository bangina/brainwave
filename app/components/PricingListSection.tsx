"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ToggleSwitch from "./ToggleSwitch";

function PricingListSection() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="flex flex-col items-center">
      <SectionTitle
        title="Pricing & Plans"
        description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
      />
      <ToggleSwitch isYearly={isYearly} setIsYearly={setIsYearly} />
    </section>
  );
}

export default PricingListSection;
