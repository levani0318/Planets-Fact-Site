import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="flex justify-around pt-[33px] gap-[33px]">
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
export default Navigation;
