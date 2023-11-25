import './call.css';
import callimg from '../../../img/Header/iPhone.svg'

const Call = () =>{
    return (
        <div  className='call'>
            <div className='call-logo'>
                <img src={callimg} alt='call logo'/>
            </div>
            <div className='call-text'>
                <p className='call-text-us bold'>Позвони нам</p>
                <p className='call-text-phone bold'><a style={{color: 'black', textDecoration: 'none'}} href='tel:+79998887766'>+7(966)080-10-18</a></p>
            </div>
        </div>
    )
}

export default Call;
