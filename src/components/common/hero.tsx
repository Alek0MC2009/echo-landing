import React from 'react'
import heroImg from '@/assets/imgs/hero.png'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article className="relative h-[60vh] min-h-100 w-full overflow-hidden my-24 ">
        {/* Imagen */}
        <img
          src={heroImg}
          alt="Auriculares"
          className="h-full w-full object-contain object-center"
        />

        {/* Capa oscura */}
        <div className="absolute inset-0" />

        {/* Contenido */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="select-none max-w-4xl text-center text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Diseñamos sonido que se siente, no solo se escucha.
          </h1>
        </div>
      </article>
    </motion.section>
  )
}

export default Hero
