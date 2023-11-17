import {React} from "react";
import {motion} from "framer-motion";
import './timeoutpages.css'
import ruller from '../../img/Main/ruler.svg';
import phone from '../../img/Header/iPhone.svg'
import alarm from '../../img/Main/alarm.svg'

const animationStyle = {
    timeOutPagesHidden : {
        y: 150,
        opacity: 0
    },
    timeOutPagesVisible : custom => ({
        y:0,
        opacity: 1,
        transition: {delay : custom *0.5},
    })
}

const TimeOutPages = () => {
    return (
        <div className='timeOutPages'>
            <div className='timeOutPages-container'>
                <div className='timeOutPages-container-title'>
                    <h1 className='timeOutPages-container-title-h1 bold'>
                        Как устроен процесс
                    </h1>
                </div>
                <motion.div
                    initial={'timeOutPagesHidden'}
                    whileInView={'timeOutPagesVisible'}
                    className='timeOutPages-container-content'>
                    <motion.div custom={1} variants={animationStyle} className='timeOutPages-container-content-item'>
                        <div className='timeOutPages-container-content-item-img'>
                            <img src={phone} width={'100px'} height={'100px'}/>
                        </div>
                        <div className='timeOutPages-container-content-item-text bold'>
                            <p>Сделайте заказ по телефону 8(966)080-10-18 </p>
                        </div>
                    </motion.div>
                    <motion.div custom={2} variants={animationStyle} className='timeOutPages-container-content-item'>
                        <div className='timeOutPages-container-content-item-img'>
                            <img src={alarm} width={'100px'} height={'100px'}/>
                        </div>
                        <div className='timeOutPages-container-content-item-text bold'>
                            <p>В течение 30 минут мобильная мастерская выедет на ваш объект</p>
                        </div>
                    </motion.div>
                    <motion.div custom={3} variants={animationStyle} className='timeOutPages-container-content-item'>
                        <div className='timeOutPages-container-content-item-img'>
                            <img src={ruller} width={'100px'} height={'100px'}/>
                        </div>
                        <div className='timeOutPages-container-content-item-text bold'>
                            <p>На месте мы изготовим любой РВД по вашим параметрам</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>);
}

export default TimeOutPages;
