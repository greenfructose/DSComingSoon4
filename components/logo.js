import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet="/assets/rokeserviceslogo-dark.svg"/>
        {/* <Image width={300} height={100} src="/assets/rokeserviceslogo.svg" alt="logo"/> */}
        <img className="w-[300px]" src="/assets/rokeserviceslogo.svg" alt="logo" />
      </picture>
        {/* <h2 className="text-2xl font-bold leading-6 text-gray-800">Roke Services</h2> */}
    </div>
  )
}

export default Logo