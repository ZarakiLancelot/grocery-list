import styles from './SwitchTheme.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  const openLink = url => {
    window.open(url, '_blank', 'noopener, noreferrer');
  }

  return (
    <div className={styles.btns}>
      <button style={{fontSize:"3em", backgroundColor:"transparent"}} onClick={() => openLink("https://www.linkedin.com/in/edwin-einsen-vasquez-velasquez/")}>
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
      <button style={{fontSize:"3em", backgroundColor:"transparent"}} onClick={() => openLink("https://github.com/ZarakiLancelot/grocery-list.git")}>
        <FontAwesomeIcon icon={faGithub} />
      </button>
      <button style={{fontSize:"3em", backgroundColor:"transparent"}} onClick={() => openLink("https://twitter.com/DevChapin")}>
        <FontAwesomeIcon icon={faTwitter} />
      </button>
      <div>
        <p>Author: Edwin Einsen Vásquez Velásquez</p>
        <p>Version: 1.0.1</p>
        <p><a href="mailto:einsen.vasquez.velasquez@gmail.com">einsen.vasquez.velasquez@gmail.com</a></p>
      </div>
    </div>
  );
};

export default SocialMedia;
