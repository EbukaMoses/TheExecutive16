import { twMerge } from "tailwind-merge";

interface Props{
className?: string,
}
const Divider = ({className}:Props) => {
const newClassName = twMerge("w-[40px] h-[2.5px] mr-2 ml-2 rounded-sm", className)
     return <div className={newClassName}></div>;
}

export default Divider