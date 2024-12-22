
interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="col-md-3 mb-4">
      <h5 className="text-white mb-4">{title}</h5>
      <ul className="list-unstyled">
        {links.map(({ label, href }) => (
          <li key={label} className="mb-2">
            <a href={href} className="text-secondary text-decoration-none hover-text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;