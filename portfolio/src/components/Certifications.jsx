import { motion } from "framer-motion";
// Import images
import image1 from "../Assets/GenAiBadge.png";
import image2 from "../Assets/GithubCertificate.png";
import image3 from "../Assets/JavascriptCertificate.png";
import image4 from "../Assets/ReactCertificate.png";
import image5 from "../Assets/ScalerAWSCertificate.png";
import { Children } from "react";

const certificateData = [
  {
    image: image3,
    title: "JavaScript Essential Training - LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/ef057332bf240158b00ef578ea8116f87a5cc7261b9ed5a9d51d84a7785d71a4"
  },
  {
    image: image2,
    title: "Learning Github - LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/db7dc9d6e12611ed1968fd2e8c33958c8a1fdf5e265a3a0e2e86951274777c6a?trk=share_certificate"
  },
  {
    image: image4,
    title: "React Essential Training - LinkedIn Learning",
    url:"https://www.linkedin.com/learning/certificates/6510d802b87e4305422034ea5fafad704b28bf7be3cd0da7ae5b144fed88d15f"
  },
  {
    image: image5,
    title: "Scaler Academy AWS Certification",
    url: "https://moonshot.scaler.com/s/sl/kmie6scTcs?_gl=1*10wzi4p*FPAU*MTkxMDQ2NzI4OS4xNzI4NTc1ODcw*_ga*OTU5NDc4NTA1LjE3Mjg1NzU4NjY.*_ga_53S71ZZG1X*MTcyODU3NTg2Ni4xLjEuMTcyODU3NzE1NS40OS4wLjE3Njc1Mzg5Mzc."
  },

  {
    image: image1,
    title: "Introduction to Generative AI by Google Cloud Skills",
    url: "https://www.cloudskillsboost.google/course_templates/536/badge"
  },

  {
    image: image1,
    title: "IBM - Developing Backend apps with Node.js and Express",
    url: "https://www.coursera.org/account/accomplishments/verify/B3LYS649QMYD?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
  },
];

const CertificateCard = ({ certificate }) => {
  return (
    <ScrollReveal>
    
    <div className="flex max-w-[480px] flex-wrap justify-center gap-8 text-white">
      <a 
        href={certificate.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105">

        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="max-w-full" 
        />
      </a>

      <div>
        <a 
          href={certificate.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-center font-medium hover:underline">
          {certificate.title}
        </a>

      </div>
    </div>

  </ScrollReveal>
  );
};

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity: 1, y:0}}
    viewport = {{once:true}}
    transition={{duration:0.8}}>

      {children}
    </motion.div>

  )
}


const Certifications = () => {
  return (
    <div
      id="certifications"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-1 md:py-24">
      
      <ScrollReveal>
      <h1 className="text-2xl font-light text-white md:text-6xl mb-8">Certifications</h1>
      </ScrollReveal>
      
      <div className="flex flex-row flex-wrap justify-center gap-4 max-w-[1200px] text-white">
        {certificateData.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>

    </div>
  );
};


export default Certifications;