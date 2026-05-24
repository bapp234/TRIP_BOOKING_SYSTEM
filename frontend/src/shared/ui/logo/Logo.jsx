import { FaBus } from 'react-icons/fa';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <FaBus className="text-2xl text-black" />
      <h1 className="font-extrabold text-xl tracking-tight text-black">TripBooking</h1>
    </div>
  );
};