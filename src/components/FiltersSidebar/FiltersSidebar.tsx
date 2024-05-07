import Dropdown from "../Dropdown/Dropdown";
import { SidebarStyled, SidebarSubtitle } from "../Sidebar/Sidebar.styled";
import { FiltersSidebarWrapper } from "./FiltersSidebar.styled";
const schools = [
  { label: "Enchantment", value: "Enchantment" },
  { label: "Abjuration", value: "Abjuration" },
  { label: "Conjuration", value: "Conjuration" },
  { label: "Divination", value: "Divination" },
  { label: "Illusion", value: "Illusion" },
  { label: "Evocation", value: "Evocation" },
  { label: "Necromancy", value: "Necromancy" },
  { label: "Transmutation", value: "Transmutation" },
];

export default function FiltersSidebar() {
  return (
    <SidebarStyled>
      <SidebarSubtitle>Filters</SidebarSubtitle>
      <FiltersSidebarWrapper>
        <Dropdown title={"School"} options={schools} />
      </FiltersSidebarWrapper>
    </SidebarStyled>
  );
}
