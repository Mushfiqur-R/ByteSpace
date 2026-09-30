type LearningProgressCardProps = {
  progress?: number; // 0 - 100
  title?: string;
  className?: string;
};

export const LearningProgressCard = ({
  progress = 55,
  title = "Learning Progress",
  className = "",
}: LearningProgressCardProps) => {
  const value = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={`flex w-[232px] max-w-full flex-col items-start gap-2 rounded-[16px] bg-white p-4 backdrop-blur-[10px] ${className}`}
    >
      {/* title */}
      <span className="font-satoshi text-[14px] font-medium leading-[120%] text-[#242528]">
        {title}
      </span>

      {/* percentage */}
      <span className="font-poppins text-[48px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        {value}%
      </span>

      {/* progress bar */}
      <div className="h-2 w-full rounded-[24px] bg-[#F6F6F6]">
        <div
          className="h-2 rounded-[24px] bg-[#D4FB20]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};