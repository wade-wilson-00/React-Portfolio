import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full
    items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center
      gap-10 text-white">

      <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}>

        <div className="flex max-w-[600px] flex-col items-center
        justify-center gap-3 text-center">

          <h1  className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-6xl 
          font-semibold transition-all duration-300
          hover:opacity-100">Aman Gujamagadi</h1>

          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light
          md:text-4xl">Web Developer</h3> <br></br>

          <p className="md:text-base text-5xl text-white-600">
          I'm a Web Developer and CS undergraduate passionate about Full Stack Development. Skilled in JavaScript, React, and Python, I build clean, scalable applications for seamless user experiences. Currently, I'm expanding into Node.js, Express, Next.js, RESTful APIs, and Cloud Technologies while exploring Generative AI in web development. Let's collaborate and create something exceptional!
          </p>

        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Hero