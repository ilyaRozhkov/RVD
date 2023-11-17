import {React} from "react";
import './timeoutpages.css'
import ruller from '../../img/Main/ruler.svg';
import phone from '../../img/Main/phone.svg'
import alarm from '../../img/Main/alarm.svg'
const TimeOutPages = () => {
    return (
        <div className='timeOutPages'>
            <div className='timeOutPages-container'>
                <div className='timeOutPages-container-title'>
                    <h1 className='timeOutPages-container-title-h1 bold'>
                        Как устроен процес
                    </h1>
                </div>
                <div className='timeOutPages-container-content'>
                    <div className='timeOutPages-container-content-item'>
                        <div className='timeOutPages-container-content-item-img'>
                            <img src={phone} width={'100px'} height={'100px'}/>
                        </div>
                        <div className='timeOutPages-container-content-item-text bold'>
                            <p>Сделайте заказ по телефону 8(966)080-10-18 </p>
                        </div>
                    </div>
                    <div className='timeOutPages-container-content-item'>
                        <div className='timeOutPages-container-content-item-img'>
                            <img src={alarm} width={'100px'} height={'100px'}/>
                        </div>
                        <div className='timeOutPages-container-content-item-text bold'>
                            <p>В течение 30 минут мобильная мастерская выедет на ваш объект</p>
                        </div>
                    </div>
                    <div className='timeOutPages-container-content-item'>
                        <div className='timeOutPages-container-content-item-img'>
                            <img src={ruller} width={'100px'} height={'100px'} style={{backgroundColor: 'black'}}/>
                        </div>
                        <div className='timeOutPages-container-content-item-text bold'>
                            <p>На месте мы изготовим любой РВД по вашим параметрам</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default TimeOutPages;
