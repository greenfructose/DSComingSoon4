import Logo from "./logo"
// import LogoDark from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="w-full bg-transparent py-9 transition-all duration-500 ease-in" id="header">
        <a href="#" className="flex justify-center lg:items-start lg:px-0 px-8 mx-auto no-underline text-gray-600 bg-transparent">
            <Logo/>
        </a>
    </header>
  )
}

export default Header