import logo from '../../white-shiba-dog.jpg';
import styles from './index.module.css';
import UserRegister from '../user-register'
import Blog from '../blog'
import { Button } from '@material-ui/core';

export function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> component division
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UserRegister name={"takeshi"}/>
      <Blog/>
      <Materials />
    </div>
  );
}

function Materials() {
    return <Button color="primary">Hello World</Button>;
  }

export default App;
