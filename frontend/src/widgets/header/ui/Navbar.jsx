import { FaHouse } from "react-icons/fa6";
import { FaHeadset, FaRoute } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

export const Navbar = ({ className = "" }) => {
    return (
        <nav aria-label="Menu chính" className={`text-sm font-bold text-gray-600 ${className}`}>
            <a href="/" className="whitespace-nowrap hover:text-orange-400 transition-colors py-3 lg:py-0 border-b border-gray-50 lg:border-none flex lg:inline-flex items-center">
                <FaHouse className="mr-2 text-lg" /> Trang chủ
            </a>
            <a href="/chuyen-xe" className="whitespace-nowrap hover:text-orange-400 transition-colors py-3 lg:py-0 border-b border-gray-50 lg:border-none flex lg:inline-flex items-center">
                <FaRoute className="mr-2 text-lg" /> Chuyến xe
            </a>
            <a href="/khuyen-mai" className="whitespace-nowrap hover:text-orange-400 transition-colors py-3 lg:py-0 border-b border-gray-50 lg:border-none flex lg:inline-flex items-center">
                <MdLocalOffer className="mr-2 text-lg" /> Khuyến mãi
            </a>
          
        </nav>
    );
};
