import {React, useState, FC} from "react";
import './carausel.css'
import arrow from '../../img/Main/arrow.svg'

type Props = {
    furstLevelData: []
}
const Carausel : FC<Props>  = (props) =>{
    const {furstLevelData} = props;
    const [indexItem, setIndexItem] = useState(0);
    const [newClass, setNewClass] = useState("visible");
    const nextItem = () => {
        setNewClass("unvisible");
        setTimeout(() => {
            if (indexItem == furstLevelData.length - 1) {
                setIndexItem(0);
            } else {
                setIndexItem(indexItem + 1);
            }
            setTimeout(() => {

                setNewClass("visible");

            }, 500)

        }, 500)


    };
    const beforeItem = () => {
        setNewClass("unvisible");
        setTimeout(() => {
            if (indexItem == 0) {
                setIndexItem(furstLevelData.length - 1);
            } else {
                setIndexItem(indexItem - 1);
            }
            setTimeout(() => {

                setNewClass("visible");

            }, 500)




        }, 500)
    };

    return (
        <div className="Container">
            <button className='button-carausel' onClick={() => beforeItem()}><img src={arrow} width={'20px'} height={'20px'} style={{rotate: '180deg'}} alt='before arrow'/></button>
            <div className="Content">
                {furstLevelData
                    .filter((item, index) => index == indexItem)
                    .map((item, index) => (
                        <div
                            key={index}
                            className={'fields ' + newClass}
                        >
                            <div className={'carausel-img'} style={{backgroundImage: `url(${item.image})`}}>

                                <img src={item.image} alt="Nature" className={'carausel-img'}/>
                                <div className='content-line-container'>
                                    <div className='content-line-container-container bold'>
                                        <p className='content-line-container-container-text bold'>
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <button className='button-carausel' onClick={() => nextItem()}><img src={arrow} width={'20px'} height={'20px'} alt='next arrow'/></button>
        </div>
    );
}

export default Carausel;
