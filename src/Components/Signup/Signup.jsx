import { useRef } from "react";

const Signup = (props) => {
  const username = useRef("");
  const password = useRef("");
  const passwordConfirmation = useRef("");

  const signup = async (event) => {
    const responseBody = JSON.stringify({
      email: username.current.value,
      password: password.current.value,
      password_confirmation: passwordConfirmation.current.value,
    });
    const response = await fetch("http://206.189.91.54/api/v1/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: responseBody,
    });
    const data = await response.json();
    if (data.status === "success") {
      props.utilities.changePage(event, "home");
    }

    username.current.value = "";
    password.current.value = "";
    passwordConfirmation.current.value = "";
  };

  return (
    <>
      <div className="form-wrapper">
        <input
          ref={username}
          type="email"
          placeholder="username"
          name=""
          id=""
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          name=""
          id=""
        />
        <input
          ref={passwordConfirmation}
          type="password"
          placeholder="confirm password"
          name=""
          id=""
        />
      </div>
      <div onClick={signup} className="form-wrapper">
        <button>signup</button>
      </div>
      <div className="form-wrapper">
        <button
          onClick={(event) => {
            props.utilities.changePage(event, "home");
          }}
        >
          back
        </button>
      </div>
    </>
  );
};

export default Signup;
