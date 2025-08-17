import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex justify-around content-center gap-[33px] font-bold text-[11px] leading-6 pt-[11px] pb-[27px]">
      <li>
        <Link to={"/"}>Mercury</Link>
      </li>
      <li>
        <Link to={"venus"}>Venus</Link>
      </li>
      <li>
        <Link to={"/earth"}>Earth</Link>
      </li>
      <li>
        <Link to={"/mars"}>Mars</Link>
      </li>
      <li>
        <Link to={"/jupiter"}>Jupiter</Link>
      </li>
      <li>
        <Link to={"/saturn"}>Saturn</Link>
      </li>
      <li>
        <Link to={"/uranus"}>Uranus</Link>
      </li>
      <li>
        <Link to={"/neptune"}>Neptune</Link>
      </li>
    </ul>
  );
};
export default Navbar;
