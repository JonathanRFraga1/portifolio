import style from './nav.module.scss'

export default function Nav() {
    return (
        <nav className={`${style.nav} ${style.active}`}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutMe">Sobre</a></li>
                <li><a href="/myProjects">Projetos</a></li>
            </ul>
        </nav>
    )
}