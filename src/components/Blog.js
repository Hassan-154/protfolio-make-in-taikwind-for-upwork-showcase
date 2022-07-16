import React from 'react';
import { NavLink } from "react-router-dom";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";

function Blog() {


  const container = {
    hidden: { opacity: 0 },
    show: {
      animate:{ x: 100 },
      transition: { delayChildren: 1 },
      opacity: 1,
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: {

      opacity: 1,
    }
  }
  

  return <div className='h-screen w-full text-white bg-slate-700' id="blog">

<motion.ul
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.li animated={{ x: 100 }}variants={item}>the real value</motion.li>
    <motion.li variants={item}>2</motion.li>
  </motion.ul>


  </div>;
}

export default Blog;


