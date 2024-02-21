import FeatureListSection from "../components/FeatureListSection";
import PricingListSection from "../components/PricingListSection";

export default function Home() {
  return (
    <div className="max-w-[1110px] mx-auto">
      <PricingListSection />
      <FeatureListSection />
    </div>
  );
}
