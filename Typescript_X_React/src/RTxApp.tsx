import { RTxAdminInfo } from "./components/Reusable Types (RT)/RTxAdminInfo";
import { RTxUserInfo } from "./components/Reusable Types (RT)/RTxUserInfo";

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
