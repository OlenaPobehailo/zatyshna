import css from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Container = ({ children, backgroundColor }: ContainerProps) => {
  return (
    <div className={css.container} style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default Container;
