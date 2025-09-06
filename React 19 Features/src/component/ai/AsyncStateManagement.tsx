/*
[isPending, startTransition]
    isPending → Boolean flag
अगर कोई operation अभी चल रहा है, तो true होगा।
इससे आप loading indicator या disabled button दिखा सकते हैं।

    startTransition → Function
इसके अंदर आप वो code डालते हैं जो low-priority या async operation है।
React इसे background में process करेगा और UI responsive रहेगा।
*/

import { useState, useTransition } from "react";

export default function MyForm() {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    startTransition(async () => {
      try {
        await fakeApiCall(name);
        setSuccess(true);
      } catch (err: any) {
        setError(err.message);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        gap: "8px",
      }}
    >
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Submitted successfully!</p>}
    </form>
  );
}

// Fake API call function
function fakeApiCall(data: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data) reject(new Error("Name is required"));
      else resolve("Success");
    }, 1000);
  });
}
