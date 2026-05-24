import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export const FaqItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className="group border-b border-gray-200 hover:border-orange-300 transition-colors duration-300 py-6 last:border-b-0"
      key={item.id}
    >
      {/* QUESTION BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded px-2"
      >
        {/* NUMBER BADGE + QUESTION */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 font-bold text-sm">
              {index + 1}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 pt-1">
            {item.question}
          </h3>
        </div>

        {/* CHEVRON ICON */}
        <div className="flex-shrink-0 mt-1">
          <FaChevronDown
            className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* ANSWER SECTION */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-12 pr-4 pt-4 pb-2">
          {/* ACCENT BAR */}
          <div className="absolute left-6 top-0 w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <p className="text-base text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </article>
  );
};

export default FaqItem;
