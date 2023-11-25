import {FC, React, useEffect, useState} from 'react';
import ModalLeft from "./ModalLeft/ModalLeft.tsx";
import ModalRight from "./ModalRight/ModalRight.tsx";
import './modal.css'
import closeimg from '../../img/Modal/closeModal.svg'
type Props = {
    activity: boolean
    setActivityMessage: ()=>void
}
const apiKey='61zdbm8ccecmayytpi7nu1xjrkgiioezdokdkkee';
const Modal : FC<Props> = (props) =>{
    const {activity,setActivity} = props;
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
        return () => {window.onresize = false};
    }, [windowWidth]);
    const showModal=windowWidth>700;
    return (

        <div className={activity ? 'modal activity': 'modal'}>
            <div className='modal-component'>
                <img src={closeimg} alt={'close button'} className='modal-exit' width={'30px'} height={'30px'} onClick={()=>setActivity()}/>
                <div className='modal-component-content'>
                    <div className='modal-component-content-feedback'>
                        <ModalLeft changeActivity={setActivity}/>
                    </div>
                    {showModal &&
                    <div className='modal-component-content-about'>
                        <ModalRight/>
                    </div>
                    }
                </div>
            </div>
        </div>
        )
}

export default Modal;
