import { useState } from "react";
import Button from "../Button";
import { AnimatePresence } from "framer-motion";
import SignInModal from "../Modal/SignInModal";

export default function Navbar() {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <nav className="w-100 px-4 py-2 relative z-10">
        <div className="container flex items-center justify-between">
          <div className="logo flex items-center text-white text-sm">
            <img src="/logo.svg" alt="Shinder" className="w-12 h-12" />
            <h1 className="ml-3">Shivaji Dates</h1>
          </div>
          <Button
            text="Login"
            variant="secondary"
            className="px-4 py-2"
            onClick={() => setLoginModal(true)}
          />
        </div>
      </nav>
      <AnimatePresence>
        {loginModal && (
          <SignInModal isOpen={loginModal} setIsOpen={setLoginModal} />
        )}
      </AnimatePresence>
    </>
  );
}
