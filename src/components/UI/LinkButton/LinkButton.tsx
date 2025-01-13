import css from "./LinkButton.module.css";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  name: string;
}

const LinkButton = ({ children, name, ...props }: LinkButtonProps) => {
  return (
    <a
      className={`${css.button} ${css[name] || ''}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
