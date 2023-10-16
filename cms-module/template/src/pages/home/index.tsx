import styles from './index.module.css';

/* eslint-disable-next-line */
export interface PageProps {}

export const path = 'home';

export function Page(props: PageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home Module!</h1>
      <h2>thanks!</h2>
    </div>
  );
}

export default Page;
