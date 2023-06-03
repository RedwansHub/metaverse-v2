'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

interface TypeProps {
  title: string, 
  textStyles: string
}

export const TypingText = ({ title, textStyles } : TypeProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


interface TitleProps {
  title: React.ReactElement, 
  textStyles: string
}

export const TitleText = ({ title, textStyles } : TitleProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
