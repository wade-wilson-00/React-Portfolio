
const Contact = () => {

  return (

    <div id="contact" className="flex min-h-[70vh] min-w-full
    items-center justify-center">

      <div className="flex flex-col items-center justify-center
      gap-3 space-y-6 p-24">

        <h1 className="text-center text-5xl md:text-7xl">
           <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-6xl 
          font-semibold transition-all duration-300
          hover:opacity-100">Get in Touch
           </span>
         </h1>

        <p className="text-center text-lg from-semibold text-white">
        Want to chat? I'd love to hear from you.
        </p>

        <div class="flex flex-row gap-4 p-4">
    
           <a href="https://www.linkedin.com/in/aman-gujamagadi-144770318" className="text-nowrap rounded-lg border
           border-indigo-500 bg-black px-5 py-3 text-lg font-bold
           text-white shadow-lg shadow-indigo-700 transition-all
           duration-300 hover:translate-y-1 hover:shadow-xl
           hover:shadow-indigo-600">Linked In</a>
    
           <a href="mailto:amxxn10@gmail.com" className="text-nowrap rounded-lg border
           border-red-500 bg-black px-5 py-3 text-lg font-bold
           text-white shadow-lg shadow-red-700 transition-all
           duration-300 hover:translate-y-1 hover:shadow-xl
          hover:shadow-red-600">Email</a>

        </div>

      </div>
    </div>
  );
}

export default Contact;