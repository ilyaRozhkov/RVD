import {FC, React} from 'react';
import ModalLeft from "./ModalLeft/ModalLeft.tsx";
import ModalRight from "./ModalRight/ModalRight.tsx";
import './modal.css'
import closeimg from '../../img/Modal/closeModal.svg'
type Props = {
    activity: boolean
    setActivityMessage: ()=>void
}

const Modal : FC<Props> = (props) =>{
    const {activity,setActivity} = props;

    return (

        <div className={activity ? 'modal activity': 'modal'}>
            <div className='modal-component'>
                <img src={closeimg} alt={'close button'} className='modal-exit' width={'30px'} height={'30px'} onClick={()=>setActivity()}/>
                <div className='modal-component-content'>
                    <div className='modal-component-content-feedback'>
                        <ModalLeft/>
                    </div>
                    <div className='modal-component-content-about'>
                        <ModalRight/>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Modal;
