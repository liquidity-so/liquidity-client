import React from "react";

const AuthContext = React.createContext({
  liquidityAuthToken: "",
  activeUser: [],
});

export default AuthContext;
