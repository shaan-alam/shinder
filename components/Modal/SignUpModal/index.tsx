// import { GoogleLogin } from 'react-google-login';
import Button from "../../Button";
import Modal from "..";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <h1 className="text-primary text-3xl font-bold my-4 text-center">
          Get Started
        </h1>
        <div className="auth-area">
          <form action="">
            <div className="form-control my-4">
              <input
                type="email"
                placeholder="Email"
                className="focus:border transition-all focus:border-primary outline-none py-2 px-4 rounded-md bg-gray-300 w-full"
              />
            </div>
            <div className="form-control my-4">
              <input
                type="text"
                placeholder="Full Name"
                className="focus:border transition-all focus:border-primary outline-none py-2 px-4 rounded-md bg-gray-300 w-full"
              />
            </div>
            <div className="form-control my-4">
              <input
                type="text"
                placeholder="Password"
                className="focus:border transition-all focus:border-primary outline-none py-2 px-4 rounded-md bg-gray-300 w-full"
              />
            </div>
            <div className="form-control my-4">
              <input
                type="text"
                placeholder="Confirm Password"
                className="focus:border transition-all focus:border-primary outline-none py-2 px-4 rounded-md bg-gray-300 w-full"
              />
            </div>
            <Button text="Submit" variant="primary" className="w-full my-5 px-4 py-2" />
          </form>

          <div className="flex items-center justify-between">
            <span className="h-[1px] w-[110px] bg-gray-400 rounded-full"></span>
            <span className="text-gray-600 font-bold">OR</span>
            <span className="h-[1px] w-[110px] bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
