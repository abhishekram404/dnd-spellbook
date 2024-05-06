import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { AppTitle, NavbarStyled } from "./Navbar.styled";

export default function Navbar() {
  return (
    <NavbarStyled>
      <AppTitle>
        <Link to="/">D&D Spellbook</Link>
      </AppTitle>

      <div>
        <Input
          placeholder="Search spells"
          leftIcon={<Icon icon="bx:search" color="#fefbf6" fontSize={20} />}
        />{" "}
      </div>
    </NavbarStyled>
  );
}
