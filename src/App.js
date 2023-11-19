import {React, useState} from "react";
import Header from './Header/Header.tsx'
import Modal from './Common/Modal/Modal.tsx';
import Main from "./Main/Main.tsx";
import './App.css';
import Footer from "./Common/Footer/Footer.tsx";

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
          <Footer />
        <Modal activity={activityMessage} setActivity={changeActivityMessage}/>

      </>
  );
}

export default App;
