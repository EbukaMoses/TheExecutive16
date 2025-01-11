
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  className?: string;
}

const HeadingTwo = ({ title, className }: Props) => {
  const newClassName = twMerge("text-xl font-bold", className);
  return <div className={newClassName}>{title}</div>;
};

export default HeadingTwo