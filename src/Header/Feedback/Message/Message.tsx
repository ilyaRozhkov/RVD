import {React, FC} from "react";
import './message.css'
import messageimg from '../../../img/Header/Chat.svg'

type Props = {
    setActivity: ()=>void;
}

const Message : FC<Props> = (props) => {
    const {setActivity} = props;
    return (
        <div className='message' onClick={()=>setActivity()}>
        <div className='message-logo'>
            <img src={messageimg} alt='message logo'/>
        </div>
        <div className='message-text'>
            <p className='message-text-us bold'>Напиши нам</p>
            <p className='message-text-phone bold'>rvdservice24@yandex.ru</p>
        </div>
    </div>
    )
}

export default Message;
