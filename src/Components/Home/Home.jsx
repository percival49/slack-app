import Signin from "../Signin/Signin";

import Card from "../Utilities/Card/Card";

const Home = (props) => {
  return (
    <Card>
      <Signin
        account={props.account}
        setAccount={props.setAccount}
        utilities={props.utilities}
      />
      <div>
        <a
          href=""
          onClick={(event) => {
            props.utilities.changePage(event, "signup");
          }}
          type="submit"
        >
          signup
        </a>
      </div>
    </Card>
  );
};

export default Home;
