import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <link to={"/"}>Mercury</link>
      </li>
      <li>
        <link to={"/venus"}>Venus</link>
      </li>
      <li>
        <link to={"/earth"}>Earth</link>
      </li>
      <li>
        <link to={"/mars"}>Mars</link>
      </li>
      <li>
        <link to={"/jupiter"}>Jupiter</link>
      </li>
      <li>
        <link to={"/saturn"}>Saturn</link>
      </li>
      <li>
        <link to={"/uranus"}>Uranus</link>
      </li>
      <li>
        <link to={"/neptune"}>Neptune</link>
      </li>
    </ul>
  );
};
export default Navigation;
