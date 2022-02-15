import Image from 'next/image';
import Form from '../components/Form';
import Header from '../components/header'
import SocialMedia from '../components/socialMedia'

export default function Home() {

  return (
    <>
      <div className="coming-soon dark:bg-slate-800">
        <div className="coming-soon__wrapper">
          <div className="coming-soon__header">
            <Header/>
          </div>
          
          <div className="section">
            <div className="section__wrapper">
              <div className="section__description">
                <h1 className="section__title dark:text-gray-50">Our website is under construction...</h1>
                <p className="section__text dark:text-gray-50">Be notified as soon as our new website is available. 
                  Click the button below to susbcribe to our email newsletter to be notified as soon as we launch.</p>
                
                
                <Form/>
                <SocialMedia/>
              </div>
              <div className="hidden md:flex justify-center py-12">
                <Image src="/assets/experience_design.svg" alt="Image - Soon X Webflow Template" className="max-w-3/4 mx-auto p-16 lg:max-w-full lg:p-0" width={700} height={500}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
