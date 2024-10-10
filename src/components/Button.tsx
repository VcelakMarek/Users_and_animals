import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  color?: "red" | "purple" | "grey" | "transparent";
  children?: ReactNode;
  canGoBack?: boolean;
  hasIcon?: boolean;
  full?: boolean;
  invisible?: boolean;
  link?: string;
  hasNoStyle?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const backgroundColor = {
  red: "bg-red hover:bg-red-hover",
  purple: "bg-purple hover:bg-purple-hover",
  grey: "bg-[#e6e8f5] hover:bg-light-grey",
  transparent: "",
};

const textColor = {
  red: "text-white",
  purple: "text-white",
  grey: "text-light-blue",
  darkBlue: "text-grey",
  transparent: "",
};

const Button = ({
  color = "transparent",
  canGoBack,
  children,
  hasIcon,
  full,
  invisible,
  link,
  hasNoStyle,
  ...rest
}: Props) => {
  const border = "rounded-full";
  const dimensions = !hasIcon
    ? `h-12 pl-6 pr-6 ${full ? "w-full" : null}`
    : " pl-5 pb-2";
  const text = "font-bold text-xs tracking-[1px]";
  const flex = "flex items-center gap-4 ";

  let baseClasses = [
    backgroundColor[color],
    textColor[color],
    border,
    dimensions,
    text,
    invisible ? "invisible" : null,
  ];

  if (hasNoStyle) baseClasses = [];

  const linkClasses = baseClasses.concat(flex);

  if (canGoBack) {
    return (
      <button {...rest} className="mb-6 flex justify-between gap-5">
        <h3 className="mt-0.5 hover:text-grey">Go back</h3>
      </button>
    );
  }

  if (link) {
    return (
      <Link to={link} className={linkClasses.join(" ")}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={baseClasses.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
