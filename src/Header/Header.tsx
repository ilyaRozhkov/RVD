import {React, FC, useState, useEffect} from "react";
import Logo from './Logo/Logo.tsx'
import Hugs from './Hugs/Hugs.tsx'
import FeedBack from './Feedback/Feedback.tsx'
import './header.css'

type Props = {

    setActivityMessage: ()=>void;
}

const Header : FC<Props> = (props) => {
 const {setActivityMessage} = props;
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    const [showHugs, setShowHugs] = useState(true)
    const [showLogo, setShowLogo] = useState(true)
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        console.log(windowWidth)
        setShowHugs(windowWidth > 950);
        setShowLogo(windowWidth > 700);
        console.log(showHugs,showLogo)
    }, [windowWidth]);

    return(
        <div className="header">
            <div className='header-navbar'>
                {showLogo &&
                <div className='header-logo'>
                    <Logo/>
                </div>
                }
                {showHugs &&
                <div className='header-hug'>
                    <Hugs/>
                </div>
                }
                <div className='header-feedback'>
                    <FeedBack  setActivity={setActivityMessage}/>
                </div>

            </div>
        </div>
    )
}


export default Header;
