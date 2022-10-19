import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const ChannelArea = (props) => {
  const message = useRef("");
  const messagesToLoad = useRef({});

  const sendMessage = async () => {
    console.log(props.currentChannelSelected);
    const responseBody = JSON.stringify({
      receiver_id: props.currentChannelSelected.current.id,
      receiver_class: "Channel",
      body: message.current.value,
    });
    const response = await fetch("http://206.189.91.54/api/v1/messages", {
      method: "POST",
      body: responseBody,
      headers: props.utilities.getAddionalHeaders(),
    });
    message.current.value = "";
    const data = await response.json();
  };

  const loadMessage = () => {
    console.log("loadmessage:", props.currentMessagesSelected.length);
    if (props.currentMessagesSelected.length) {
      console.log("messages:", props.currentMessagesSelected);
      const allMessages = props.currentMessagesSelected.map((msg) => {
        return (
          <li key={msg.id}>{`${msg.body} | sent by ${msg.sender.uid}`}</li>
        );
      });
      return allMessages;
    } else {
      return <li>No messages yet</li>;
    }
  };

  return (
    <>
      <p>Messages:</p>
      <ul>{loadMessage()}</ul>
      <input ref={message} placeholder="message" type="text" name="" id="" />
      <button onClick={sendMessage}>send</button>
    </>
  );
};

export default ChannelArea;
