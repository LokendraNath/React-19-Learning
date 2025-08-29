import { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  city: string;
}

const STExUserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    city: "",
  });

  const updateName = (name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  };
  const updateAge = (age: string) => {
    setProfile((prev) => ({ ...prev, age: +age }));
  };
  const updateCity = (city: string) => {
    setProfile((prev) => ({ ...prev, city }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        value={profile.age > 0 ? profile.age : ""}
        placeholder="Enter Age"
        onChange={(e) => {
          updateAge(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => updateCity(e.target.value)}
      />
      <h3 style={{ marginTop: "30px" }}>Profile Sammari</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>City: {profile.city}</p>
    </div>
  );
};
export default STExUserProfile;
