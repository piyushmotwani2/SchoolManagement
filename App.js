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
      email: "",
      regSubjects: []
    },
    currentSubject: {}
  });
  return (
    <GlobalState.Provider value={[state, setState]}>
      <Routes />
    </GlobalState.Provider>
  );
}
