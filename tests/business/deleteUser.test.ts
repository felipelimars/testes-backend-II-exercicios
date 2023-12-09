import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserSchema } from "../../src/dtos/user/deleteUser.dto"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando deleteUser", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("Deve deletar um usuário", async () => {
    const input = DeleteUserSchema.parse({
      token: "token-mock-astrodev",
      idToDelete: "id-mock-fulano"
    })

    const output = await userBusiness.deleteUsers(input)

    expect(output).toEqual("Usuário deletado com sucesso")
  })
})