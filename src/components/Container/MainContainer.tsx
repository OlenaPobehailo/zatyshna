import React from "react";
import css from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: ContainerProps) => {
  return <div className={css.mainContainer}>{children}</div>;
};

export default MainContainer;
