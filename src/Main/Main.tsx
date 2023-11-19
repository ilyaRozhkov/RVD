import {React} from "react";
import Carausel from "../Common/Carausel/Carausel.tsx";
import TimeOutPages from "../Common/TimeOutPages/TimeOutPages.tsx";
import Services from "../Common/Services/Services.tsx";
import Example from "../Common/Example/Example.tsx";
import furstLevelData from '../Data/data.ts'

import './main.css';
const Main = () => {
    return (
        <div className="main">
            <div  className='main-first-level'>
                <Carausel  furstLevelData={furstLevelData}/>
            </div>
            <div  className='main-second-level' id="part1">
                <TimeOutPages  />
            </div>
            <div className='main-first-level'>
                <Services/>
            </div>
            <div className='main-first-level' id="part3">
                <Example />
            </div>
        </div>
    )
}

export default Main;
