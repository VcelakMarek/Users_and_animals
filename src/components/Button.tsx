import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  color?: "red" | "purple" | "grey" | "transparent";
  children?: ReactNode;
  isDropdown?: boolean;
  DropDownMenu?: ReactNode;
  canGoBack?: boolean;
  hasIcon?: boolean;
  isOpen?: boolean;
  full?: boolean;
  invisible?: boolean;
  link?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
// ☝🏻 Contains all the attributes of a button element (onClick, type,...)

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
  isDropdown,
  canGoBack,
  children,
  hasIcon,
  isOpen,
  full,
  invisible,
  link,
  className,
  ...rest
}: Props) => {
  const border = !isDropdown && "rounded-full";
  const dimensions = !hasIcon
    ? `h-12 pl-6 pr-6 ${full ? "w-full" : null}`
    : " pl-5 pb-2";
  const text = "font-bold text-xs tracking-[1px]";
  const flex = "flex items-center gap-4 ";

  const baseClasses = [
    backgroundColor[color],
    textColor[color],
    border,
    dimensions,
    text,
    invisible ? "invisible" : null,
  ];

  const dropDownClasses = [text, flex];
  const linkClasses = baseClasses.concat(flex);

  if (isDropdown) {
    return (
      <button {...rest} className={dropDownClasses.join(" ")}>
        {children}
        <img
          className={isOpen ? "rotate-180 duration-500" : "duration-500"}
          src="/todo_app/assets/icon-arrow-down.svg"
          alt="arrow-down"
        />
      </button>
    );
  }

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
