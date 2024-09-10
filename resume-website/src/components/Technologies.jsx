import React from 'react'
import { RiFlutterFill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { animate, motion } from "framer-motion";
const iconVariants = (delay) => ({
    initial: { y: -10 },
    animate: {
        y: [-10, 10],
        transition: {
            duration: delay,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    }
})
const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4  border-neutral-800 p-4'>
                    <RiReactjsLine className='text-5xl text-green-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4  border-neutral-800 p-4'>
                    <RiFlutterFill className='text-5xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4  border-neutral-800 p-4'>
                    <SiMongodb className='text-5xl text-yellow-400' />
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies