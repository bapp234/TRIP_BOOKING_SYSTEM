export const FooterLink = ({ link, isDarkBackground = false }) => {
  const textClass = isDarkBackground 
    ? 'text-gray-300 hover:text-white' 
    : 'text-gray-600 hover:text-gray-900';

  return (
    <li>
      <a
        href={link.href}
        className={`text-sm ${textClass} transition-colors duration-300 font-medium hover:underline decoration-teal-500 underline-offset-4`}
      >
        {link.label}
      </a>
    </li>
  );
};

export default FooterLink;
