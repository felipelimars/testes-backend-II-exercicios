import z from 'zod'

export interface DeleteUserInputDTO {
  token: string,
  idToDelete: string
}

export type DeleteUserOutputDTO = string

export const DeleteUserSchema = z.object({
  token: z.string().min(1),
  idToDelete: z.string().min(1)
})