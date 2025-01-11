import { twMerge } from "tailwind-merge"

interface Props {
title: string,
className?: string
}

const HeadingOne = ({title, className}: Props) => {
const newClassName = twMerge("text-2xl font-bold", className)
  return (
      <div className={newClassName}>{title}</div>
  )
}

export default HeadingOne