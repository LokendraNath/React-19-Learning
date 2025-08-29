import { type Info } from "./RTxUserInfo";
type aInfo = Info & { position: string };

export const RTxAdminInfo = ({
  name,
  favActress,
  age,
  isSingle,
  position,
}: aInfo) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{JSON.stringify(favActress)}</li>
      <li>{age}</li>
      <li>{isSingle ? "He is single" : "He is not Single"}</li>
      <li>{position}</li>
    </ul>
  );
};
