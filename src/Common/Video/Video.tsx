import {React} from "react";
import video1 from '../../img/Example/video1.MP4'
import video2 from '../../img/Example/video2.MOV'
import './video.css'

const Video = () =>{
    return <div className={'video'}>
        <div className={'video-container'}>
            <video src={video1} width="360" height="600" controls="controls" autoPlay="true"/>
            <video src={video2} width="360" height="600" controls="controls" autoPlay="true"/>
        </div>
    </div>
}

export default Video;
