import Search from "./Search";
import Channel from "./Channel";

const Slack = (props) => {
  // Utilities
  const utilities = {
    getAddionalHeaders() {
      const additionalHeaders = {
        "Content-Type": "application/json",
        "access-token": props.account.accessToken,
        client: props.account.client,
        expiry: props.account.expiry,
        uid: props.account.uid,
      };
      return additionalHeaders;
    },
    async getUserID(username) {
      const response = await fetch("http://206.189.91.54/api/v1/users", {
        method: "GET",
        headers: this.getAddionalHeaders(),
      });
      const data = await response.json();
      console.log(data);
      const foundAccountData = {};
      data.data.forEach((account) => {
        if (account.uid === username) {
          foundAccountData.uid = account.uid;
          foundAccountData.id = account.id;
          console.log("account found!");
        }
      });
      return foundAccountData.id;
    },
  };

  return (
    <>
      Welcome {props.account.email}!
      <Search utilities={utilities} />
      <Channel utilities={utilities} />
    </>
  );
};

export default Slack;
