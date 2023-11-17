import {React} from "react";
import Carausel from "../Common/Carausel/Carausel.tsx";
import TimeOutPages from "../Common/TimeOutPages/TimeOutPages.tsx";
import Example from "../Common/Example/Example.tsx";
import furstLevelData from '../Data/data.ts'

import './main.css';
const Main = () => {
    return (
        <div className="main">
            <div  className='main-first-level'>
                <Carausel  furstLevelData={furstLevelData}/>
            </div>
            <div id="part1" className='main-second-level'>
                <TimeOutPages />
            </div>
            <div className='main-first-level'>
                <Carausel  furstLevelData={furstLevelData}/>
            </div>
            <div className='main-first-level'>
                <Example />
            </div>
        </div>
    )
}

export default Main;
