import styles from './SwitchTheme.module.css';

const SocialMedia = () => {
  return (
    <div className={styles.btns}>
      <a target='_blank' href="https://www.linkedin.com/in/edwin-einsen-vasquez-velasquez/" rel="noopener noreferrer external">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
      </a>
      <a target='_blank' href="https://github.com/ZarakiLancelot/grocery-list.git" rel="noopener noreferrer external">
        <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" />
      </a>
      <a target='_blank' href="https://twitter.com/DevChapin" rel="noopener noreferrer external">
        <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
      </a>
      <div>
        <p>Author: Edwin Einsen Vásquez Velásquez</p>
        <p>Version: 1.0.1</p>
        <p><a href="mailto:einsen.vasquez.velasquez@gmail.com">einsen.vasquez.velasquez@gmail.com</a></p>
      </div>
    </div>
  );
};

export default SocialMedia;
