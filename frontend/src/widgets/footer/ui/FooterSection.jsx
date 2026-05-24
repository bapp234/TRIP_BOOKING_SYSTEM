import { FooterLink } from './FooterLink';

export const FooterSection = ({ title, links, isDarkBackground = false }) => {
  return (
    <nav>
      <h3 className={`font-black text-sm uppercase tracking-wider mb-5 ${
        isDarkBackground ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <FooterLink key={link.label} link={link} isDarkBackground={isDarkBackground} />
        ))}
      </ul>
    </nav>
  );
};

export default FooterSection;
