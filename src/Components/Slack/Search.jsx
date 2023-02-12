import { useRef } from "react";

const Search = (props) => {
  const search = useRef("");

  const searchUser = async () => {
    const response = await fetch("http://206.189.91.54/api/v1/users", {
      method: "GET",
      headers: props.utilities.getAddionalHeaders(),
    });
    const data = await response.json();
    console.log(data);
    const foundAccountData = {};
    data.data.forEach((account) => {
      if (account.uid === search.current.value) {
        foundAccountData.uid = account.uid;
        foundAccountData.id = account.id;
        console.log("account found!");
      }
    });
    if (!foundAccountData.uid) {
      console.log("account not found!");
    }
    return foundAccountData;
  };

  return (
    <>
      <div className="form-wrapper">
        <input ref={search} placeholder="search" type="text" name="" id="" />
        <button onClick={searchUser}>Go</button>
      </div>
    </>
  );
};

export default Search;
