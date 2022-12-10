import style from './nav.module.scss'

export default function Nav() {
    return (
        <>
        <input type="checkbox" id="check" className={`${style.check}`} />
        <label htmlFor="check" className={`${style.checkbtn}`}>
            <div className={`${style.menuButton}`}>
                <span className={`${style.hamburger}`}></span>    
            </div>     
        </label>   
        <nav className={`${style.nav}`}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre-mim">Sobre</a></li>
                <li><a href="/projetos">Projetos</a></li>
            </ul>
        </nav>
        </>
    )
}