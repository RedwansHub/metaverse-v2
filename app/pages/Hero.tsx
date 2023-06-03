'use client';

import { motion } from 'framer-motion';

import styles from '../constants/extraStyles';
import { slideIn,staggerContainer, textVariant } from '../utils/motion';
import Image from 'next/image';
import React from 'react'

interface ContainerProps{
  staggerChildren: string
  delayChildren: string
}


const Hero = () => {
  
  const containerVariant = ""
  return (
    <div className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.nav variants={staggerContainer }
                    initial="hidden"
                    whileInView="show" 
                    className={`${styles.xPaddings} py-8 relative`}>
                    
        </motion.nav>
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)}  initial="hidden" animate="show" className={styles.heroHeading}>
              Metaverse
            </motion.h1>
            <motion.div variants={textVariant(1.2)} initial="hidden" animate="show"
              className="flex flex-row justify-center items-center">
              <h1 className={styles.heroHeading}>Ma</h1>
              <div className={styles.heroDText} />
              <h1 className={styles.heroHeading}>Ness</h1>
            </motion.div>
        </div>
        <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)} initial="hidden" animate="show"
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <Image
          src="/cover.png"
          alt="hero_cover"
          width={3900}
          height={2200}
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image
              src="/stamp.png"
              alt="stamp"
              width={500}
              height={500}
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </div>
  )
}

export default Hero