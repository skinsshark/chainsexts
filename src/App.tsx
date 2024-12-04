import styles from './App.module.css';
import TextsWrapper from './TextsWrapper';

function App() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>Chain Sexts</h1>
      <TextsWrapper />
    </div>
  );
}

export default App;
