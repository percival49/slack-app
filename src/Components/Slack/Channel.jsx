import ChannelChannel from "./ChannelChannel";
import ChannelArea from "./ChannelArea";

import { useEffect, useRef, useState } from "react";

import Card from "../Utilities/Card/Card";

const Channel = (props) => {
  const [channels, setChannels] = useState([]);
  const currentChannelSelected = useRef({});
  const [currentMessagesSelected, setCurrentMessagesSelected] = useState({});

  const username = useRef("");
  const channelName = useRef("");

  const createChannel = async () => {
    let userID = await props.utilities.getUserID(username.current.value);
    console.log("USERID:", userID);

    if (userID && channelName.current.value.length >= 3) {
      const responseBody = JSON.stringify({
        name: channelName.current.value,
        user_ids: [userID],
      });
      const response = await fetch("http://206.189.91.54/api/v1/channels", {
        method: "POST",
        headers: props.utilities.getAddionalHeaders(),
        body: responseBody,
      });
      getChannels();
    }
  };

  const getChannels = async () => {
    const response = await fetch("http://206.189.91.54/api/v1/channels/", {
      method: "GET",
      headers: props.utilities.getAddionalHeaders(),
    });
    const data = await response.json();
    setChannels(data.data);
    console.log(channels);
  };

  const listChannels = () => {
    if (channels) {
      const channelsToShow = channels.map((account) => {
        return (
          <ChannelChannel
            setCurrentMessagesSelected={setCurrentMessagesSelected}
            utilities={props.utilities}
            currentChannelSelected={currentChannelSelected}
            account={account}
            key={account.name}
          />
        );
      });
      return channelsToShow;
    } else {
    }
  };

  const getChannelMessage = () => {};

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <>
      <div>
        <h1>Create channel</h1>
        <input ref={username} placeholder="user ID" type="text" name="" id="" />
        <input
          ref={channelName}
          placeholder="channel name"
          type="text"
          name=""
          id=""
        />
        <button onClick={createChannel}>Go</button>
      </div>
      <h2>List of channels:</h2>
      <div id="list-of-channels">
        <Card>
          <ul>{listChannels()}</ul>
        </Card>
      </div>
      <div>
        <Card>
          <ChannelArea
            currentMessagesSelected={currentMessagesSelected}
            setCurrentMessagesSelected={setCurrentMessagesSelected}
            utilities={props.utilities}
            currentChannelSelected={currentChannelSelected}
          />
        </Card>
      </div>
    </>
  );
};

export default Channel;
