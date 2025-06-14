interface FooterLinkItem {
  text: string;
  href?: string; // сделаем необязательным, так как для заголовка он не нужен
  isTitle?: boolean; // флаг для заголовка h3
}

export const aboutLinks: FooterLinkItem[] = [
  { text: "About US", isTitle: true },
  { text: "About", href: "#" },
  { text: "What We Do", href: "#" },
  { text: "Project", href: "#" },
  { text: "How It Work With Us", href: "#" },
];

export const socialLinks: FooterLinkItem[] = [
  { text: "Follow US", isTitle: true },
  { text: "Instagram", href: "#" },
  { text: "Facebook", href: "#" },
  { text: "LinkedIn", href: "#" },
  { text: "Youtube", href: "#" },
];

export const FooterLinksList = ({ links }: { links: FooterLinkItem[] }) => {
  return (
    <ul className="footer__contacts">
      {links.map((item, index) => (
        <li key={index}>
          {item.isTitle ? (
            <h3 className="footer__contacts__title">{item.text}</h3>
          ) : (
            <a href={item.href}>{item.text}</a>
          )}
        </li>
      ))}
    </ul>
  );
};
