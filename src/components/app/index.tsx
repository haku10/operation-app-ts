import logo from '../../white-shiba-dog.jpg';
import styles from './index.module.css';
import UserRegister from '../user-register';
import Blog from '../blog';
import { Button } from '@material-ui/core';

export function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>React ＆ TypeScriptの学習</p>
      </header>
      <UserRegister name={'takeshi'} />
      <Blog />
      <Materials />
    </div>
  );
}

function Materials() {
  return <Button color="primary">Hello World</Button>;
}

export default App;
