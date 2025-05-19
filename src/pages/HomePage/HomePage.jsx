import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to Contacts Manager</h1>
      <p className={styles.text}>Manage your contacts easily and securely.</p>
    </div>
  );
};

export default HomePage;
