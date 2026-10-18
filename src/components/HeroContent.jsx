

export default function HeroContent() {
  return (
    <div className="px-50 py-30 flex gap-10 items-end justify-between">
      <h1 className="text-white text-[110px] font-bold leading-none">
        Find the best <span className="text-Light-Coral">talent</span>
      </h1>
      <div className="flex-col w-200">
        <div className="w-16 border-t-4 pt-15 border-Rapture-Blue"></div>
        <p className="text-white text-[20px] leading-relaxed">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </div>
  );
}
