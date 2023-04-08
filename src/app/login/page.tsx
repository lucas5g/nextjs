'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/Input";
import Form from "@/components/Form";
import { LoginType, loginSchema } from "@/utils/schemas";


export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema)
  })


  return (
    <>
      <Form handleSubmit={handleSubmit}>

        <Input
          label='E-mail'
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />

      </Form>
    </>
  )
}




