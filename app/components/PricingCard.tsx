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
    <li className="border">
      <h3>{pricingItem.name}</h3>
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
