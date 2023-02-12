import { useEffect } from "react";

const ChannelChannel = (props) => {
  const setCurrentChannelSelected = async () => {
    props.currentChannelSelected.current = props.account;

    console.log("Current selected channel:", props.currentChannelSelected);
    const receiverID = props.currentChannelSelected.current.id;
    const receiverClass = "Channel";
    const response = await fetch(
      `http://206.189.91.54/api/v1/messages?receiver_id=${receiverID}&receiver_class=${receiverClass}`,
      {
        method: "GET",
        headers: props.utilities.getAddionalHeaders(),
      }
    );
    const data = await response.json();
    props.setCurrentMessagesSelected(data.data);
    console.log(data.data);
  };

  return <li onClick={setCurrentChannelSelected}>{props.account.name}</li>;
};

export default ChannelChannel;
