import { useRef } from "react";

const Signin = (props) => {
  const username = useRef();
  const password = useRef();

  const signinHandler = async (event, page) => {
    event.preventDefault();
    try {
      let enteredUsername = username.current.value;
      let eneteredPassword = password.current.value;
      const body = {
        email: enteredUsername,
        password: eneteredPassword,
      };

      const response = await fetch("http://206.189.91.54/api/v1/auth/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.data.success == "false") {
        console.log("Incorrect credentials!");
      } else {
        props.setAccount({
          email: enteredUsername,
          password: eneteredPassword,
          accessToken: response.headers.get("access-token"),
          client: response.headers.get("client"),
          uid: response.headers.get("uid"),
        });
        // Saving to localStorage for hot reloading
        // const account = {
        //   isLogged: true,
        //   email: enteredUsername,
        //   password: eneteredPassword,
        // };
        // localStorage.setItem("loggedAccount", JSON.stringify(account));
        props.utilities.changePage(event, "slack");
        console.log("Signed in!");
      }
    } catch (error) {
      console.log("the error:", error);
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <input
          ref={username}
          type="text"
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
      </div>
      <div className="form-wrapper">
        <button onClick={signinHandler}>signin</button>
      </div>
    </>
  );
};

export default Signin;
