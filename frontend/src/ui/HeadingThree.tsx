import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  className?: string;
}

const HeadingThree = ({ title, className }: Props) => {
  const newClassName = twMerge("text-lg font-bold", className);
  return <div className={newClassName}>{title}</div>;
};

export default HeadingThree;
