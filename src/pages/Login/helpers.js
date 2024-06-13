import { usersService } from "../../services/api";

export async function loadUsers(setIsLoading, setUsers) {
  setIsLoading(true);
  const userList = await usersService.getUsers();
  setUsers(userList);
  setIsLoading(false);
}
