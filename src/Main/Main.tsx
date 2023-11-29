import {React, useEffect, useState} from "react";
import Carausel from "../Common/Carausel/Carausel.tsx";
import TimeOutPages from "../Common/TimeOutPages/TimeOutPages.tsx";
import Services from "../Common/Services/Services.tsx";
import Example from "../Common/Example/Example.tsx";
import Video from "../Common/Video/Video.tsx";
import furstLevelData from '../Data/data.ts'

import './main.css';
const Main = () => {
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    const showCarausel=windowWidth>450;
    return (
        <div className="main">
            {showCarausel &&
            <div  className='main-first-level'>
                <Carausel  furstLevelData={furstLevelData}/>
            </div>
            }
            <div  className='main-second-level' id="part1">
                <TimeOutPages  />
            </div>
            <div className='main-first-level services-wrap' style={{position: 'relative', zIndex: '20'}}>
                <Services/>
            </div>
            <div className='main-first-level video-wrap' style={{position: 'relative', zIndex: '0'}} id="part3">
                <Video />
            </div>
            <div className='main-first-level example-wrap' style={{position: 'relative', zIndex: '0'}} >
                <Example />
            </div>

        </div>
    )
}

export default Main;
