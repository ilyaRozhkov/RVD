import React from 'react';
import {motion} from "framer-motion";
import './example.css'

const Example = () => {
    return(
        <div className='example'>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'red'}}></motion.div>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'green'}}></motion.div>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'blue'}}></motion.div>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'black'}}></motion.div>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'blue'}}></motion.div>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'red'}}></motion.div>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'black'}}></motion.div>
            <motion.div whileHover={{ scale: 2.5 }} className='example-container' style={{backgroundColor: 'green'}}></motion.div>
        </div>
    )

}

export default Example