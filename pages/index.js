import Image from 'next/image';
import Form from '../components/Form';
import Header from '../components/header'
import SocialMedia from '../components/socialMedia'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Daniel and Sons</title>
        <meta name="description" content="Soft Wash and Pressure Wash"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="coming-soon dark:bg-slate-800">
        <div className="coming-soon__wrapper">

          
          <div className="section">
            <div className="section__wrapper">
              <div className="section__description ">
              <div className="coming-soon__header">
            <Header/>
          </div>
                <h1 className="section__title dark:text-gray-50">Our website is under construction...</h1>
                <p className="section__text dark:text-gray-50">To contact us, please provide your name, email, and the reason for contact.
                </p>
                
                
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
