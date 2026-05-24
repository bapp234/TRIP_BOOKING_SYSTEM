/**
 * SeatLegend - Legend explaining seat status colors
 */
export const SeatLegend = () => {
  return (
    <div className="flex gap-6 flex-wrap text-xs">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-white border-2 border-zinc-300 rounded-lg" />
        <span className="text-zinc-600">Còn trống</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-emerald-500 border-2 border-emerald-600 rounded-lg" />
        <span className="text-zinc-600">Đã chọn</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-orange-500 border-2 border-orange-700 rounded-lg opacity-60" />
        <span className="text-zinc-600">Đã bán</span>
      </div>
    </div>
  );
};
