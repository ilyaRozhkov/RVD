import './call.css';
import callimg from '../../../img/Header/iPhone.svg'

const Call = () =>{
    return (
        <div className='call'>
            <div className='call-logo'>
                <img src={callimg} alt='call logo'/>
            </div>
            <div className='call-text'>
                <p className='call-text-us bold'>Позвони нам</p>
                <p className='call-text-phone bold'>+7(966)080-10-18</p>
            </div>
        </div>
    )
}

export default Call;