import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button = ({ text, className, variant, onClick }: Props) => {
  const variants = {
    secondary: "bg-white rounded-md text-pink-500 cursor-pointer font-bold",
    primary:
      "text-white rounded-full bg-gradient-to-r from-pink-500 to-primary transition-all hover:from-primary hover:to-pink-500",
  };

  return (
    <button className={`${variants[variant]} ${className} `} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
