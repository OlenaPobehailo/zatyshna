import css from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
