export type Info = {
  name: string;
  favActress: string[];
  age: number;
  isSingle: boolean;
};

export const RTxUserInfo = ({ name, favActress, age, isSingle }: Info) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{JSON.stringify(favActress)}</li>
      <li>{age}</li>
      <li>{isSingle ? "He is single" : "He is not Single"}</li>
    </ul>
  );
};
