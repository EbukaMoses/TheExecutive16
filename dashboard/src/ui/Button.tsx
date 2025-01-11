import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  // onClick: any;
  icon?: any;
  className?: string;
  path?: any;
}

const Button = ({ title, icon, className, path }: Props) => {
  const newClassName = twMerge(
    "flex whitespace-nowrap items-center gap-1 text-white md:font-bold py-2 px-4 rounded text-[12px] md:text-base",
    className
  );
  return (
    <Link to={path} className={newClassName}>
      {icon}
      {title}
    </Link>
  );
};

export default Button;
