import './hugs.css';


const Hugs = () => {
    return (
        <div className='hugs'>
            <button className='hugs-button bold'><a style={{color: 'black', textDecoration: 'none'}} className={'bold'} href={'#part1'}>О нас</a></button>
            <button className='hugs-button bold'><a style={{color: 'black', textDecoration: 'none'}} className={'bold'} href={'#part2'}>Услуги</a></button>
            <button className='hugs-button bold'><a style={{color: 'black', textDecoration: 'none'}} className={'bold'} href={'#part3'}>Ассортимент</a></button>
            <button className='hugs-button bold'><a style={{color: 'black', textDecoration: 'none'}} className={'bold'} href={'#part4'}>Контакты</a></button>
        </div>
    )
}

export default Hugs;
