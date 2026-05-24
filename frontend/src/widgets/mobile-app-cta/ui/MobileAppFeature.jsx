import { FaCheck } from 'react-icons/fa6';

export const MobileAppFeature = ({ feature }) => {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
        <FaCheck className="w-4 h-4 text-teal-600" />
      </span>
      <span className="text-gray-300     font-medium leading-relaxed">{feature}</span>
    </li>
  );
};

export default MobileAppFeature;
