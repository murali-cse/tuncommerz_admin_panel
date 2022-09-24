import React from "react";
import * as Icon from "react-feather";

export default class Icons {
  static Grid = () => {
    return <Icon.Grid size="18px" style={{ marginRight: "10px" }} />;
  };
  static User = () => {
    return <Icon.User size="18px" style={{ marginRight: "10px" }} />;
  };
  static Box = () => {
    return <Icon.Box size="18px" style={{ marginRight: "10px" }} />;
  };
  static Menu = () => {
    return <Icon.Menu size="18px" style={{ marginRight: "10px" }} />;
  };
  static trendingUp = () => {
    return <Icon.TrendingUp size="18px" style={{ marginRight: "10px" }} />;
  };
  static sun = () => {
    return <Icon.Sun size="18px" style={{ marginRight: "10px" }} />;
  };
  static return = () => {
    return <Icon.RotateCcw size="18px" style={{ marginRight: "10px" }} />;
  };
  static help = () => {
    return <Icon.HelpCircle size="18px" style={{ marginRight: "10px" }} />;
  };
  static settings = () => {
    return <Icon.Settings size="18px" style={{ marginRight: "10px" }} />;
  };
  static logout = ({ color }) => {
    return (
      <Icon.LogOut size="18px" style={{ marginRight: "10px", color: color }} />
    );
  };
}
