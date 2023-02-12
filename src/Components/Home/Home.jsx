import Signin from "../Signin/Signin";

import Card from "../Utilities/Card/Card";

const Home = (props) => {
  return (
    <div className="sign-form-container">
      <div className="sign-form">
        <Signin
          account={props.account}
          setAccount={props.setAccount}
          utilities={props.utilities}
        />
        <div id="signup-text-container">
          <p>Not registered?</p>
          <a
            href=""
            onClick={(event) => {
              props.utilities.changePage(event, "signup");
            }}
            type="submit"
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
