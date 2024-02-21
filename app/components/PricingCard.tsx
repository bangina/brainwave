import Image from "next/image";

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
        $
        <span className="text-[60px] font-bold leading-[65px] tracking-[-2px]">
          {pricingItem.price}
        </span>
        / month
        <span className="font-rubik block text-[15px] leading-[26px] tracking-[-0.1px] text-[#161C2D] opacity-70 mt-[12px] mb-[38px]">
          billed monthly
        </span>
      </p>
      <ul className="mb-[32px]">
        {pricingItem.benefitList.map((benefitItem) => (
          <li
            key={benefitItem.id}
            className="flex items-center gap-[8px] mb-[16px]"
          >
            {benefitItem.available ? (
              <Image
                src="/icons/checkmark.svg"
                width={17}
                height={11}
                alt="checkmark"
              />
            ) : (
              <Image
                src="/icons/x-mark.svg"
                width={12}
                height={12}
                alt="x-mark"
              />
            )}
            {benefitItem.description}
          </li>
        ))}
      </ul>
      <button className="text-[17px] font-bold rounded-[8px] py-[13px] px-[22px] bg-lightBlue leading-[32px] text-blue tracking-[-0.6px]">
        <a href="/" className="flex justify-between gap-[50px]">
          <span>Start Free Trial</span>
          <Image
            src="/icons/right-arrow.svg"
            alt="right arrow"
            width={14}
            height={12}
          />
        </a>
      </button>
      <p>No credit card required</p>
    </li>
  );
}

export default PricingCard;
