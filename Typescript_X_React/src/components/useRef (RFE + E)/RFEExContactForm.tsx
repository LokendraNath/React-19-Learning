import { useState, type ChangeEvent, type FormEvent } from "react";

interface formDataState {
  name: string;
  email: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<formDataState>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div>
      <h1>Step 2 (Contact Form)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:{" "}
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
