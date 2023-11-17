import {React, useState} from "react";
import Header from './Header/Header.tsx'
import Modal from './Common/Modal/Modal.tsx';
import Main from "./Main/Main.tsx";
import './App.css';

function App() {
  const [activityMessage, setActivityMessage] = useState(false);
  const changeActivityMessage = () =>{
    setActivityMessage(!activityMessage);
  }
  console.log(activityMessage);
  return (
      <>
        <Header setActivityMessage={changeActivityMessage}/>
          <Main/>
        <Modal activity={activityMessage} setActivity={changeActivityMessage}/>

      </>
  );
}

export default App;
