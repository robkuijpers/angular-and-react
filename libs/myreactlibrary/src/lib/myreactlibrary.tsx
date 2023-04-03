import styles from './myreactlibrary.module.scss';

/* eslint-disable-next-line */
export interface MyreactlibraryProps {}

export function Myreactlibrary(props: MyreactlibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Myreactlibrary!</h1>
    </div>
  );
}

export default Myreactlibrary;
