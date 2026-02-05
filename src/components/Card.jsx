const Card = ({ title, value }) => {
  return (
    <div
      className="
        bg-[#FFFFFF]
        px-[20px] py-[16px]
        rounded-[12px]
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
      "
    >
      <p className="text-[16px] font-medium text-[#4B5563]">
        {title}
      </p>

      <h3 className="text-[24px] font-bold text-[#111827] mt-[8px]">
        {value}
      </h3>
    </div>
  );
};

export default Card;
