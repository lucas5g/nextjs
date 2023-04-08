import { ReactNode } from "react"

interface Props{
  children:ReactNode
}
export function Card({children}:Props){
  return(
    <div className="p-5 w-[95%] bg-white rounded shadow-md">
      {children}
    </div>
  )
}