import './header.modules.css'

function Header() {
    return (
        <>
            <header>
                <nav className='barra'>
                    <a href="#">Memes</a>|
                    <a href="#">Calcula Juros</a>|
                    <a href="#">Calcula Emprestimo</a>
                </nav>    
            </header>
        </>
    )
}

export default Header