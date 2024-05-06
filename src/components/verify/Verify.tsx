import React, { useState } from "react";

const Verify = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "code") {
      setCode(event.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Code:", code);
  };

  return (
    <div>
      <div className="container">
        <div className="head">
          <h1>Emailni tasdiqlash</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="formBody">
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form_group">
                <label htmlFor="code">Code</label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={code}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form_group">
              <button type="submit">Tasdiqlash</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
