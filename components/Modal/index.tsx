import { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element[] | JSX.Element;
}

const Modal = ({ isOpen, setIsOpen, children }: Props) => {
  useEffect(() => {
    const closeModal = (e: any) => {
      if (e.code == 27 || e.target.classList.contains("modal-backdrop")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeModal);
    window.addEventListener("click", closeModal);

    return () => {
      window.removeEventListener("keydown", closeModal);
      window.removeEventListener("click", closeModal);
    };
  }, []);

  return isOpen
    ? ReactDOM.createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop h-screen w-screen bg-[#000000c5] backdrop-blur fixed top-0 bottom-0 left-0 right-0  z-[30] flex items-center justify-center shadow-xl"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="modal-content bg-white rounded-md py-4 md:px-12 px-8 w-[90%] md:w-1/3"
          >
            <div className="modal-header flex items-center justify-end">
              <IoIosCloseCircleOutline
                className="text-primary h-7 w-7 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            {children}
          </motion.div>
        </motion.div>,
        document.querySelector("#modal")
      )
    : null;
};

export default Modal;
