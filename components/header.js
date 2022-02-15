import Logo from "./logo"
// import LogoDark from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="w-full bg-transparent py-9 transition-all duration-500 ease-in" id="header">
        <a href="#" className="flex items-center lg:items-start px-8 lg:max-w-7xl mx-auto no-underline text-gray-600 bg-transparent">
            <Logo/>
        </a>
    </header>
  )
}

export default Header