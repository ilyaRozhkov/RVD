import React from 'react';
import {motion} from "framer-motion";
import './example.css'
import example1 from '../../img/Example/example1.png'
import example2 from '../../img/Example/example2.png'
import example3 from '../../img/Example/example3.png'
import example4 from '../../img/Example/example4.png'
import example5 from '../../img/Example/example5.png'
import example6 from '../../img/Example/example6.png'
import example7 from '../../img/Example/electric1.png'
import example8 from '../../img/Example/electric2.png'
import example9 from '../../img/Example/video1.MP4'
const Example = () => {

    return(
        <div className='example'>
            <div className='example-container'>

                <div className='example-container-container'>
                    <motion.div whileHover={{ scale: 2 }} style={{backgroundImage: `url(${example1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                    <motion.div whileHover={{ scale: 2, zIndex: 102 }} style={{backgroundImage: `url(${example2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                    <motion.div whileHover={{ scale: 2 }} style={{backgroundImage: `url(${example3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                    <motion.div whileHover={{ scale: 2 }} style={{backgroundImage: `url(${example4})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                    <motion.div whileHover={{ scale: 2 }} style={{backgroundImage: `url(${example5})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                    <motion.div whileHover={{ scale: 2 }} style={{backgroundImage: `url(${example6})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                    <motion.div whileHover={{ scale: 2 }} style={{backgroundImage: `url(${example7})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                    <motion.div whileHover={{ scale: 2 }} style={{backgroundImage: `url(${example8})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} className='example-container-content'></motion.div>
                </div>
            </div>
        </div>
    )

}

export default Example
