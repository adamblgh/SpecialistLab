import React from 'react'
import { motion } from "framer-motion"

export const Home=()=> {
  return (
    <motion.h1 initial={{y:-250}} animate={{y:0}} transition={{delay:0.3,type:"spring",stiffness:75}} className='mt-2 text-center'>I would like to...</motion.h1>
  )
}
