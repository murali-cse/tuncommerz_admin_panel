import React from "react";
import * as Icon from "react-feather";

export default class Icons {
  static Grid = ({ status }) => {
    return (
      <Icon.Grid
        size="18px"
        className={status ? "menu-icon white" : "menu-icon"}
        style={{ marginRight: "10px" }}
      />
    );
  };
  static User = ({ status }) => {
    return (
      <Icon.User
        size="18px"
        className={status ? "menu-icon white" : "menu-icon"}
        style={{ marginRight: "10px" }}
      />
    );
  };
}
