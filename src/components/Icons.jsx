import React from "react";
import * as Icon from "react-feather";

export default class Icons {
  static Grid = () => {
    return <Icon.Grid size="18px" style={{ marginRight: "10px" }} />;
  };
  static User = () => {
    return <Icon.User size="18px" style={{ marginRight: "10px" }} />;
  };
  static Users = () => {
    return <Icon.Users size="18px" style={{ marginRight: "10px" }} />;
  };
  static Box = () => {
    return <Icon.Box size="18px" style={{ marginRight: "10px" }} />;
  };
  static Menu = () => {
    return <Icon.Menu size="18px" style={{ marginRight: "10px" }} />;
  };
  static TrendingUp = () => {
    return <Icon.TrendingUp size="18px" style={{ marginRight: "10px" }} />;
  };
  static sun = () => {
    return <Icon.Sun size="18px" style={{ marginRight: "10px" }} />;
  };
  static Return = () => {
    return <Icon.RotateCcw size="18px" style={{ marginRight: "10px" }} />;
  };
  static Help = () => {
    return <Icon.HelpCircle size="18px" style={{ marginRight: "10px" }} />;
  };
  static Settings = () => {
    return <Icon.Settings size="18px" style={{ marginRight: "10px" }} />;
  };
  static Logout = ({ color }) => {
    return (
      <Icon.LogOut size="18px" style={{ marginRight: "10px", color: color }} />
    );
  };
  static Add = ({ color }) => {
    return (
      <Icon.Plus size="18px" style={{ marginRight: "10px", color: color }} />
    );
  };
  static Upload = ({ color }) => {
    return (
      <Icon.UploadCloud
        size="18px"
        style={{ marginRight: "10px", color: color }}
      />
    );
  };
}
