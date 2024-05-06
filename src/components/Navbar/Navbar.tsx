import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { AppTitle, NavbarStyled } from "./Navbar.styled";

export default function Navbar({
  searchQuery,
  onSearchChange,
}: {
  searchQuery: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <NavbarStyled>
      <AppTitle>
        <Link to="/">D&D Spellbook</Link>
      </AppTitle>
      <Input
        placeholder="Search spells"
        leftIcon={<Icon icon="bx:search" color="#fefbf6" fontSize={20} />}
        value={searchQuery}
        onChange={onSearchChange}
      />{" "}
    </NavbarStyled>
  );
}
