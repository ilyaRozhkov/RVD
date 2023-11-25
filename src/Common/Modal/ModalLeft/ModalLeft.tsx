import {React, useState} from "react";
import emailjs from 'emailjs-com';
import './modalleft.css'
import modalleftlogo from '../../../img/Header/Logo.png'

const ModalLeft = ({changeActivity}) => {
    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueMessage, setValueMessage] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isMessage, setIsMessage] = useState(false);
    const sendTextName = (e) =>{
        setIsName(false);
        setValueName(e.target.value)
    }
    const sendTextEmail = (e) =>{
        setIsEmail(false);
        setIsShow(false);
        setValueEmail(e.target.value)
    }
    const sendTextMessage = (e) =>{
        setIsMessage(false)
        setValueMessage(e.target.value)
    }

    const cheackText = () => {
        let emptyCheck=0;
        if(!valueName){
            setIsName(true)
            emptyCheck++;
        }
        if(!valueEmail){
            setIsEmail(true);
            emptyCheck++;
        }
        if(!valueMessage){
            setIsMessage(true)
            emptyCheck++;
        }

        if(emptyCheck===0){
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(re.test(valueEmail)){
            setIsShow(false);
            sendMain();
            changeActivity();
        }else{
            setIsShow(true)
        };}
        else{
        }

    }
    const sendMain = () =>{
    const templateParams = {
        from_name: valueName,
        mail_in: valueEmail,
        message: valueMessage,
        reply_to:'qwerty',
    };

    emailjs.send('service_5iltdin','template_udghbow', templateParams, 'u9SREIX2nYM7Erx8V')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    }
    return(
        <div className='modal-left'>
            <div className='modal-left-header'>
                <div className='modal-left-header-logo'><img src={modalleftlogo} width={'30%'} height={'100%'} alt={'logo-modal'}/></div>
                <div className='modal-left-header-text'><p className={'modal-left-header-text-info bold'}>Связаться с нами</p></div>
            </div>
            <div className='modal-left-input'>
                <div className='modal-left-input-data'>
                    <input placeholder='Введите ваше имя' value={valueName} onChange={sendTextName} className='modal-left-input-data-input bold none'/>
                    {isName && <label className={'bold'} style={{color: 'black', fontSize:'14px'}}>Представьтесь пожалуйста</label>}
                </div>
                <div className='modal-left-input-data'>
                    <input placeholder='Введите вашу почту' value={valueEmail} onChange={sendTextEmail} className='modal-left-input-data-input bold none'/>
                    {isShow && <label className={'bold'} style={{color: 'black', fontSize:'14px'}}>Не верная почта</label>}
                    {isEmail && <label className={'bold'} style={{color: 'black', fontSize:'14px'}}>Укажите пожалуйста почту</label>}
                </div>
                <div className='modal-left-input-message'>
                    <textarea placeholder='Введите ваше сообщение'  value={valueMessage} onChange={sendTextMessage} className='modal-left-input-message-input bold none'/>
                    {isMessage && <label className={'bold'} style={{color: 'black', fontSize:'14px'}}>Введите ваше сообщение</label>}
                </div>
                <div className='modal-left-input-submit'>
                    <button className='modal-left-input-submit-button bold none' onClick={cheackText}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default ModalLeft;
