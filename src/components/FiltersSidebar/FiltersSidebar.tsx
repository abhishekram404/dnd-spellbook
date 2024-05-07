import { useState } from "react";
import useFilters from "../../lib/hooks/useFilters";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { SidebarSubtitle } from "../Sidebar/Sidebar.styled";
import {
  ButtonsGroup,
  FiltersSidebarStyled,
  FiltersSidebarWrapper,
} from "./FiltersSidebar.styled";
import { levels, schools } from "./FiltersSidebar.utils";

export default function FiltersSidebar() {
  const { setFilters } = useFilters();
  const [values, setValues] = useState({
    school: "",
    level: "",
  });

  const handleChange = (name: string) => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValues((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    };
  };

  // when clicking on apply, set the filters to the filters context
  const handleApply = () => {
    setFilters(values);
  };

  const clearAllFilters = () => {
    setFilters({});
  };

  return (
    <FiltersSidebarStyled>
      <SidebarSubtitle>Filters</SidebarSubtitle>
      <FiltersSidebarWrapper>
        <Dropdown
          title={"School"}
          options={schools}
          onChange={handleChange("school")}
        />
        <Dropdown
          title={"Level"}
          options={levels}
          onChange={handleChange("level")}
        />
        <ButtonsGroup>
          <Button variant="link" onClick={clearAllFilters}>
            Clear all
          </Button>
          <Button variant="default" onClick={handleApply}>
            Apply
          </Button>
        </ButtonsGroup>
      </FiltersSidebarWrapper>
    </FiltersSidebarStyled>
  );
}
