import React, { useState } from "react";

export default function FormikForm() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = { name, password, remember };
    console.log(details);
    setName("");
    setPassword("");
  };
  return (
    <>
      <h3>Formik React Form</h3>
      <form onSubmit={submit}>
        <div>
          <label>UserName:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label>Remember Password</label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
