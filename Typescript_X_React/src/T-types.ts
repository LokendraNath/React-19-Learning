type Info = {
  id: number;
  name: string;
  age: number;
};

type AdminInfoList = Info & {
  role: string;
  salary: number;
};

export { type Info, type AdminInfoList };
