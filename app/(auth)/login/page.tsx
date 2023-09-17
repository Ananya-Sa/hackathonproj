"use client";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div
      className=" position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,  
      width: '100vw',
      height: '100vh',"
      style={{
        background: 'url("background.webp")',
      }}
    >
      <h2 className="text-4xl font-semibold">Register</h2>
      <div className="flex justify-center items-center min-h-screen align-content: text-center ">
        <form>
          <div className="flex flex-col">
            <label className="text-2xl">Email:</label>
            <input
              className=" shadow-xl shadow-gray-400 border-slate-700"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl">Password:</label>

            <input
              className=" shadow-xl shadow-gray-400 border-slate-700 "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button className="rounded-none bg-slate-900 text-white px-4 py-2 ml-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
