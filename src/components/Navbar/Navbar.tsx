import { Link } from "react-router-dom";
import { AppTitle, NavbarStyled } from "./Navbar.styled";
import { InputStyled } from "../Input/Input.styled";

export default function Navbar() {
  return (
    <NavbarStyled>
      <AppTitle>
        <Link to="/">D&D Spellbook</Link>
      </AppTitle>

      <div>
        <InputStyled placeholder="Search spells" />{" "}
      </div>
    </NavbarStyled>
  );
}
