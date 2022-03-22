interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="bg-white px-4 py-2 rounded-md text-pink-500 cursor-pointer font-bold">
      {text}
    </button>
  );
};

export default Button;
