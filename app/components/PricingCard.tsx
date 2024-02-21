export interface PricingCardProps {
  pricingItem: {
    name: string;
    price: number;
    benefitList: {
      id: string;
      available: boolean;
      description: string;
    }[];
  };
}

function PricingCard({ pricingItem }: PricingCardProps) {
  return (
    <li className="border rounded-[6px] border-[#E7E9ED] py-[36px] px-[48px]">
      <h3 className="text-blue text-[13px] font-bold leading-[16px] tracking-[1.625px] uppercase mb-[40px]">
        {pricingItem.name}
      </h3>
      <p>
        $<span>{pricingItem.price}</span>/ month
        <span>billed monthly</span>
      </p>
      {
        <ul>
          {pricingItem.benefitList.map((benefitItem) => (
            <li key={benefitItem.id}>
              {benefitItem.available ? "✅" : "❌"}
              {benefitItem.description}
            </li>
          ))}
        </ul>
      }
    </li>
  );
}

export default PricingCard;
