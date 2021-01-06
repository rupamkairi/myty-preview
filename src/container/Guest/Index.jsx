import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

export default function GuestIndex() {
  const { userId } = useParams();
  const { url } = useRouteMatch();

  return (
    <div>
      <p>Guest at http://localhost:XXXX/{userId}</p>

      <p>Guest at {url}</p>
    </div>
  );
}
