import { BiLogoExpress, BiLogoGithub, 
BiLogoJavascript, BiLogoMongodb,BiLogoPython, BiLogoReact, BiLogoNodejs} from "react-icons/bi"

import {motion} from "framer-motion";

const Tech = () => {

   const variants = {
     hidden:{opacity:0, y:50},
     visible:{opacity:1, y:0} 
   }

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col
    items-center justify-center gap-16 md:gap-32">

      <motion.h1 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}} 
      className="text-3xl font-light text-white
      md:text-5xl">Technologies</motion.h1>

      <div className="flex flex-wrap items-center justify-center
      gap-10 p-5">

      <motion.div 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}>
         <BiLogoJavascript className="cursor-pointer text-8xl text-yellow-500 
         transition-all duration-300 hover:-translate-y-5 
         sm:text-8xl md:text-8xl"/>
      </motion.div>

      <motion.div 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}>
         <BiLogoReact className="cursor-pointer text-8xl text-blue-500 
         transition-all duration-300 hover:-translate-y-5 
         sm:text-8xl md:text-8xl"/>
      </motion.div>
 
      <motion.div 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}>
         <BiLogoPython className="cursor-pointer text-8xl text-orange-500 
         transition-all duration-300 hover:-translate-y-5 
         sm:text-8xl md:text-8xl"/>
      </motion.div>

      <motion.div 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}>
         <BiLogoGithub className="cursor-pointer text-8xl text-violet-500 
         transition-all duration-300 hover:-translate-y-5 
         sm:text-8xl md:text-8xl"/>
      </motion.div>

     <motion.div 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}>
         <BiLogoNodejs className="cursor-pointer text-8xl text-green-500 
         transition-all duration-300 hover:-translate-y-5 
         sm:text-8xl md:text-8xl"/>
      </motion.div>

      <motion.div 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}>
            
         <BiLogoMongodb className="cursor-pointer text-8xl text-green-500 
         transition-all duration-300 hover:-translate-y-5 
         sm:text-8xl md:text-8xl"/>
      </motion.div>

      <motion.div 
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}>
            
         <BiLogoExpress className="cursor-pointer text-8xl text-green-500 
         transition-all duration-300 hover:-translate-y-5 
         sm:text-8xl md:text-8xl"/>
      </motion.div>
    </div>
  </div>
    
  )
}

export default Tech;