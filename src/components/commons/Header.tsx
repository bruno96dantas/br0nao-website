const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Meu Portfólio</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#skills" className="hover:underline">Habilidades</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfólio</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  