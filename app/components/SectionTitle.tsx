interface SectionTitleProps {
  title: string;
  description: string;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <article className="max-w-[602px]">
      <h2 className="text-center font-bold text-[60px] leading-[65px] tracking-[-2px] mb-[44px]">
        {title}
      </h2>
      <p className="text-center text-[19px] leading-[32px] tracking-[-0.2px] mb-[53px]">
        {description}
      </p>
    </article>
  );
}

export default SectionTitle;
