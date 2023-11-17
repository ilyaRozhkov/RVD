import {React} from "react";

import './modalleft.css'
import modalleftlogo from '../../../img/Header/Logo.png'

const ModalLeft = () => {
    return(
        <div className='modal-left'>
            <div className='modal-left-header'>
                <div className='modal-left-header-logo'><img src={modalleftlogo} width={'30%'} height={'100%'} alt={'logo-modal'}/></div>
                <div className='modal-left-header-text'><p className={'modal-left-header-text-info bold'}>Связаться с нами</p></div>
            </div>
            <div className='modal-left-input'>
                <div className='modal-left-input-data'>
                    <input placeholder='Введите ваше имя' className='modal-left-input-data-input bold none'/>
                </div>
                <div className='modal-left-input-data'>
                    <input placeholder='Введите вашу почту' className='modal-left-input-data-input bold none'/>
                </div>
                <div className='modal-left-input-message'>
                    <textarea placeholder='Введите ваше сообщение' className='modal-left-input-message-input bold none'/>
                </div>
                <div className='modal-left-input-submit'>
                    <button className='modal-left-input-submit-button bold none'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default ModalLeft;
