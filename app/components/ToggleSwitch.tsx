interface ToggleSwitchProps {
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleSwitch({ isYearly, setIsYearly }: ToggleSwitchProps) {
  const onToggleChange = () => {
    setIsYearly((prev: boolean) => !prev);
  };
  return (
    <label className="flex items-center" htmlFor="toggle">
      <span className="mr-[16px]">Monthly</span>
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          name="toggle"
          className="sr-only"
          checked={isYearly}
          onChange={onToggleChange}
        />
        {/* Background */}
        <div className="block bg-black opacity-15 w-[72px] h-[33px] rounded-full" />
        {/* Circle */}
        <div
          className={`absolute left-[6px] top-[6px] bg-white w-[21px] h-[21px] rounded-full transition transform ${
            isYearly ? "translate-x-[40px]" : ""
          }`}
        />
      </div>
      <span className="ml-[16px]">Yearly</span>
    </label>
  );
}

export default ToggleSwitch;
