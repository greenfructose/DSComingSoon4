import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="mt-7 lg:mt-12">
        <div className="text-roke-black font-medium">Follow us on social media</div>
        <div className="grid max-w-[300px] mt-5 grid-cols-6 gap-4 mx-auto lg:mx-0">
          <a href="https://www.facebook.com/" className="bg-facebook socialBtn facebook"><FaFacebook/></a>
          {/* <a href="https://twitter.com/" className="bg-twitter pt-[2px] text-[15px] socialBtn twitter"><FaTwitter/></a> */}
          <a href="https://www.instagram.com/" className="bg-instagram socialBtn instagram"><FaInstagram/></a>
          {/* <a href="https://www.linkedin.com/" className="bg-linkedin socialBtn linkedin"><FaLinkedin/></a> */}
          {/* <a href="https://www.youtube.com/" className="bg-youtube socialBtn youtube"><FaYoutube/></a> */}
          <a href="https://wa.me/254797063277" className="bg-whatsapp socialBtn whatsapp"><FaWhatsapp/></a>
        </div>
    </div>
  )
}

export default SocialMedia