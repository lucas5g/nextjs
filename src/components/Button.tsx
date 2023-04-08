import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button({ ...props }: Props) {
  return (
    <button
      {...props}
      className='bg-blue-500 w-24 rounded text-white py-3 hover:bg-blue-600'
    >
      {props.value}
    </button>
  )
}