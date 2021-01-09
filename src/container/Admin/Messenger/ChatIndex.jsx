import React from "react";
import { useParams } from "react-router-dom";
//
import Chat from "../../../components/Admin/Chat/Chat";

export default function ChatIndex() {
  const { userId } = useParams();
  return (
    <div>
      <p>{userId}</p>
      <Chat />
    </div>
  );
}
