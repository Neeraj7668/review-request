import React, { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    const saveInfo = JSON.stringify(values);
    localStorage.setItem("userInfo", saveInfo);
    window.location.href="/dashboard";

  };

  return (
    <div>
      Email:{" "}
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      Password:{" "}
      <input
        type="text"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
