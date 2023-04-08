import { TextField } from "@mui/material"

interface Props {
  error?: string
  name:string
  register:any
  label:string
}

export function Input({name, register, error, ...props}: Props) {
  return (

    <TextField
      error={error ? true : false}
      helperText={error}
      {...register(String(name))}
      {...props}
    />
  )

}
