import { Link } from "react-router-dom";
import { AppTitle, NavbarStyled } from "./Navbar.styled";

export default function Navbar() {
  return (
    <NavbarStyled>
      <AppTitle>
        <Link to="/">D&D Spellbook</Link>
      </AppTitle>
    </NavbarStyled>
  );
}
