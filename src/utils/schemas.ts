import { z } from "zod";

export const loginSchema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório.')
    .email('Formato de e-mail inválido.'),
  password: z.string()
    .nonempty('Senha é obrigatória.')
    .min(4, 'A senha precisa ser no mínimo 4 caracteris.')
})
export type LoginType = z.infer<typeof loginSchema>

