const Signup = (props) => {
  return (
    <>
      <div className="form-wrapper">
        <input type="email" placeholder="username" name="" id="" />
        <input type="password" placeholder="password" name="" id="" />
        <input type="password" placeholder="confirm password" name="" id="" />
      </div>
      <div className="form-wrapper">
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
