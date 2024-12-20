import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Router from "./Router";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
