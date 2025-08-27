import { useRef, useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmitClick = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmitClick}>
        <input type="text" placeholder="Enter Your Name" ref={name} />
        <input type="email" placeholder="Enter Your Email" ref={email} />
        <input
          type="password"
          placeholder="Enter Your Password"
          ref={password}
        />
        <button type="submit">Submit</button>
        <section>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          {/* <p>Name: {submittedData.}</p> */}
        </section>
      </form>
    </div>
  );
};
