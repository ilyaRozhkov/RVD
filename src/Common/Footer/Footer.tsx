import {React} from "react";
import './footer.css'
import mailsvg from '../../img/Main/mail.svg'

const Footer = () => {
    return (
        <div className='footer bold' id="part4">
            <div className='footer-container'>
                <h3 style={{margin: '10 auto'}}>СРОЧНЫЙ ВЫЗОВ МАСТЕРА 24/7 </h3>
                <h5 style={{margin: '5 auto'}}>Профессиональное изготовление и ремонт Рукавов Высокого Давления</h5>
            </div>
            <div className='footer-container'>
                <img src={mailsvg} width={'60px'} height={'60px'} style={{margin: '0 auto'}}/>
                <p>ЕЩЕ ОСТАЛИСЬ ВОПРОСЫ?
                    СВЯЖИТЕСЬ С НАМИ ПО НОМЕРУ 8 (966) 080-10-18</p>
            </div>
        </div>
    )
}

export default Footer;
