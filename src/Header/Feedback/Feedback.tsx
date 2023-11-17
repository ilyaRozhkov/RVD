import {React, FC} from "react";
import './feedback.css';
import Call from './Call/Call.tsx';
import Message from './Message/Message.tsx';

type Props ={

    setActivity: ()=>void;
}


const FeedBack : FC<Props> = (props) => {
    const {setActivity} = props;
    return(
        <div className='feedback'>
            <div className='feedback-call'>
                <Call/>
            </div>
            <div className='feedback-message'>
                <Message  setActivity={setActivity}/>
            </div>
        </div>
    )
}

export default FeedBack
