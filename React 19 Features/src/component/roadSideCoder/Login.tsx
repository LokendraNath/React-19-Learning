import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (formData: { get: (arg0: string) => unknown }) => {
    const name = formData.get("name");
    const email = formData.get("email");
    console.log("Submitted:", name, email);
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-4 max-w-sm mx-auto p-4 border rounded-lg shadow"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
