import styles from "../styles/Home.module.scss";
import { Navbar } from '../components';
import Modal from "../components/Modal";

export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar />
      <Modal />
    </section>
  );
}
