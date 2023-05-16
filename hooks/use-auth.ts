import { useAppSelector } from "./hook";

export function useAuth() {
  const { email, token, id } = useAppSelector(state => state.toolkit.user)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
