import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { SidebarSubtitle } from "../Sidebar/Sidebar.styled";
import {
  FiltersSidebarStyled,
  FiltersSidebarWrapper,
} from "./FiltersSidebar.styled";
import { levels, schools } from "./FiltersSidebar.utils";

export default function FiltersSidebar() {
  return (
    <FiltersSidebarStyled>
      <SidebarSubtitle>Filters</SidebarSubtitle>
      <FiltersSidebarWrapper>
        <Dropdown title={"School"} options={schools} />
        <Dropdown title={"Level"} options={levels} />
        <Button variant="default">Apply</Button>
      </FiltersSidebarWrapper>
    </FiltersSidebarStyled>
  );
}
