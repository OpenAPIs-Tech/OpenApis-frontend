import React from "react";
import { useNav } from "../../customHooks/useNav";
import "../Page.css";
import "./Users.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Users = () => {
 
  const contactRef = useNav("Contact");

  return (
    <section ref={contactRef} id="usersContainer">
      <div class="container">
        <div>
          <h3 className="users-title">Our Users</h3>
          <p className="users-text">
            All these developers showed their faith in us by using our OPENApis
          </p>
        </div>
        <Stack direction="row" spacing={2} className="users-avatar">
          <Avatar {...stringAvatar("Kent Dodds")} />
          <Avatar {...stringAvatar("Jed Watson")} />
          <Avatar {...stringAvatar("Tim Neutkens")} />
        </Stack>
      </div>
    </section>
  );
};

export default Users;
