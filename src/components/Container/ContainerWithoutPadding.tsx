import React from "react";
import css from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerWithoutPadding = ({ children }: ContainerProps) => {
  return <div className={css.containerWithoutPadding}>{children}</div>;
};

export default ContainerWithoutPadding;
