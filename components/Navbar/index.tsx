import Button from "../Button";

export default function Navbar() {
  return (
    <nav className="w-100 px-4 py-2 backdrop-filter backdrop-blur">
      <div className="container flex items-center justify-between">
        <div className="logo flex items-center text-white text-sm">
          <img src="/logo.png" alt="Shinder" className="w-24 h-24" />
          <h1 className="md:block hidden">Shivaji Tinder - Tinder for Shivaji Students!</h1>
        </div>
        <Button text="Login" />
      </div>
    </nav>
  );
}
