import styles from './SwitchTheme.module.css';

const SocialMedia = () => {
  return (
    <div className={styles.btns}>
      <a href="https://www.linkedin.com/in/edwin-einsen-vasquez-velasquez/">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/ZarakiLancelot/grocery-list.git">
        <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" />
      </a>
      <a href="https://twitter.com/DevChapin">
        <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
      </a>
      <div>
        <p>Author: Edwin Einsen Vásquez Velásquez</p>
        <p>Version: 1.0.0</p>
        <p><a href="mailto:einsen.vasquez.velasquez@gmail.com">einsen.vasquez.velasquez@gmail.com</a></p>
      </div>
    </div>
  );
};

export default SocialMedia;
