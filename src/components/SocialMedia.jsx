import styles from './SwitchTheme.module.css';

const SocialMedia = () => {
  const openLink = url => {
    window.open(url, '_blank', 'noopener, noreferrer');
  }

  return (
    <div className={styles.btns}>
      <button onClick={() => openLink("https://www.linkedin.com/in/edwin-einsen-vasquez-velasquez/")}>
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
      </button>
      <button onClick={() => openLink("https://github.com/ZarakiLancelot/grocery-list.git")}>
        <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" />
      </button>
      <button onClick={() => openLink("https://twitter.com/DevChapin")}>
        <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
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
