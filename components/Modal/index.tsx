import { useState } from "react";
import { Dialog } from "@headlessui/react";
// import { GoogleLogin } from 'react-google-login';



const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md z-10"
    >
      <Dialog.Overlay />

      <Dialog.Title className="text-2xl text-center font-bold">Login</Dialog.Title>
      <Dialog.Description>
        
      </Dialog.Description>

    </Dialog>
  );
};

export default Modal;
