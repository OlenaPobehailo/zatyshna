import css from "./LinkButton.module.scss";

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
