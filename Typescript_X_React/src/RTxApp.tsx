import { RTxAdminInfo } from "./components/RTxAdminInfo";
import { RTxUserInfo } from "./components/RTxUserInfo";

export const RTxApp = () => {
  return (
    <div>
      <h1>User Info 👇</h1>
      <RTxUserInfo
        name="Elone Musk"
        favActress={["Anuska Sharma", "Dany Danials", "ASSwarya Rai"]}
        age={23}
        isSingle={false}
      />
      <h1>Admin Info 👇</h1>
      <RTxAdminInfo
        name="Lokendra Nath"
        favActress={["Sai Pallavi", "Shradda Kapoor", "Hulk Ki GF"]}
        age={20}
        isSingle={true}
        position="Software Developer"
      />
    </div>
  );
};
