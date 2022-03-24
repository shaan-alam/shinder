import { useState } from "react";
import styles from "../styles/Home.module.scss";
import { Navbar } from "../components";
import Button from "../components/Button";
import { AuthModal } from "../components";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loginModal, setLoginModal] = useState<boolean>(false);

  return (
    <section className={styles.main}>
      <Navbar />
      <div className="container mt-12 flex flex-col justify-center items-center h-96 relative z-20 mx-auto">
        <h1 className="text-3xl text-center md:text-6xl lg:text-7xl text-white font-bold">
          Start your <img src="/logo.svg" className="inline w-12 h-12" />
          &nbsp;life here!!
        </h1>
        <p className="mt-4 md:w-1/2 text-center leading-7 text-gray-200">
          Presenting you Shivaji-Dates created by Shaan Alam. An online
          community of Shivaji College Students ready to mingle!!
        </p>
        <Button
          variant="primary"
          className="transition-all hover:scale-105 py-6 px-14 my-8"
          text="Create an Account"
          onClick={() => setLoginModal(true)}
        />
      </div>

      <AnimatePresence>
        {loginModal && (
          <AuthModal isOpen={loginModal} setIsOpen={setLoginModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
