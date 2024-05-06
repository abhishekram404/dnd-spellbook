import { Icon } from "@iconify/react/dist/iconify.js";
import { BoldItalic } from "../BoldItalic/BoldItalic";
import Button from "../Button/Button";
import { SidebarSubtitle } from "./Sidebar.styled";

export const SidebarNoResult = ({
  searchQuery,
  onClearSearch,
}: {
  searchQuery?: string;
  onClearSearch?: VoidFunction;
}) => {
  return (
    <SidebarSubtitle>
      No results found for <BoldItalic>{searchQuery}</BoldItalic>
      <br />
      <Button variant="link" onClick={onClearSearch}>
        <Icon icon={"mdi:clear-outline"} />
        Clear search
      </Button>
    </SidebarSubtitle>
  );
};
