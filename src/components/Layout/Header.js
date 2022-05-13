import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';
import mealsImg from '../../assets/meals.jpg'

const Header = props => {

  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="Meals_Image" />
      </div>
    </>
  );
}

export default Header;