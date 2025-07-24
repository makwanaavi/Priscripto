import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const userData = { email, password, name };
  };
  return (
    <form className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-sm shadow-primary ">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold ">
            {state === "Sign Up" ? "Create an account" : "Login"}
          </p>
          <p>
            Please{" "}
            <span className="text-primary">
              {state === "Sign Up" ? "Signup " : "login"}
            </span>{" "}
            to book appointment
          </p>
        </div>

        {state === "Sign Up" && (
          <div className="w-full ">
            <p>Full Name</p>
            <input
              type="text"
              // placeholder="enter name "
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="border border-gray-300 rounded-md p-2 mt-1 w-full"
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            // placeholder="enter email "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="border border-gray-300 rounded-md p-2 mt-1 w-full"
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            // placeholder="enter password "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="border border-gray-300 rounded-md p-2 mt-1 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white rounded-md p-2 mt-4 w-full"
        >
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </button>

        <p className="text-sm">
          {state === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-primary cursor-pointer"
          >
            {state === "Sign Up" ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
