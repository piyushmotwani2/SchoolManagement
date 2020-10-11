import React, { useState } from 'react';
import Routes from "./routes/Routes";
import GlobalState from './context/GlobalState';


export default function App() {
  const [state, setState] = useState({
    user: {
      name: "",
      classPath: "",
      rollnum: "",
      className: "",
      regSubjects: []
    }
  });
  return (
    <GlobalState.Provider value={[state, setState]}>
      <Routes />
    </GlobalState.Provider>
  );
}
