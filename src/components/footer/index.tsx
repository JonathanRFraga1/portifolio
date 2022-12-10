import style from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <footer className={`${style.footer}`}>
          <div className={style.contacts}>
            <a className={style.contact} href='https://www.linkedin.com/in/jonathan-rossetto-de-fraga-1b301a183' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className={style.icon}/>
            </a>
            <a className={style.contact} href='https://github.com/JonathanRFraga1' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} className={style.icon}/>
            </a>
            <a className={style.contact} href='https://www.instagram.com/jonathanrfraga1/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className={style.icon}/>
            </a>
          </div>
          <div className={style.licence}>
            <FontAwesomeIcon icon={faCopyright} className={style.icon}/>&nbsp;
            Jonathan Rossetto de Fraga
          </div>
      </footer>
    </>
  )
}