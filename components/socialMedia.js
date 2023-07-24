import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="mt-7 mb-7 lg:mt-12">
        <div className="text-roke-black font-medium dark:text-gray-50">Follow us on social media</div>
        <div className="grid max-w-[150px] mt-5 grid-cols-3 gap-4 mx-auto lg:mx-0 justify-items-center">
          <a href="https://www.facebook.com/danielandsons.softwashing" target="_blank" rel="noopener noreferrer" className="bg-facebook socialBtn facebook"><FaFacebook/></a>
          {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="bg-twitter pt-[2px] text-[15px] socialBtn twitter"><FaTwitter/></a> */}
          <a href="https://www.instagram.com/danielandsons.softwash" target="_blank" rel="noopener noreferrer" className="bg-instagram socialBtn instagram"><FaInstagram/></a>
          {/* <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-linkedin socialBtn linkedin"><FaLinkedin/></a> */}
          {/* <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-youtube socialBtn youtube"><FaYoutube/></a> */}
          {/* <a href="https://wa.me/254797063277" target="_blank" rel="noopener noreferrer" className="bg-whatsapp socialBtn whatsapp"><FaWhatsapp/></a> */}
        </div>
    </div>
  )
}

export default SocialMedia