import css from "./Icon.module.scss";

type Props = {
  className: string;
  name: string;
};

const Icon = ({ className, name }: Props) => {
  return (
    <svg className={`${css.icon} ${className || ""}`}>
      <use xlinkHref={`/assets/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
