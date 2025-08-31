import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export const Form = () => {
  //* Register : is used to connect input fields to the form.
  //* Handlesubmit : is a function to handle form submission.
  //* errors: contain validation errors for the form.

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          style={{ border: "1px solid" }}
          type="text"
          id="name"
          placeholder="Enter Name"
          {...register("name", { required: "name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Enter Email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password Must be atleast 8 character",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <button disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};
