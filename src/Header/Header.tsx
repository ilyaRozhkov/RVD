import {React, FC} from "react";
import Logo from './Logo/Logo.tsx'
import Hugs from './Hugs/Hugs.tsx'
import FeedBack from './Feedback/Feedback.tsx'
import './header.css'

type Props = {

    setActivityMessage: ()=>void;
}

const Header : FC<Props> = (props) => {
 const {setActivityMessage} = props;
    return(
        <div className="header">
            <div className='header-navbar'>
                <div className='header-logo'>
                    <Logo/>
                </div>
                <div className='header-hug'>
                    <Hugs/>
                </div>
                <div className='header-feedback'>
                    <FeedBack  setActivity={setActivityMessage}/>
                </div>

            </div>
        </div>
    )
}


export default Header;
