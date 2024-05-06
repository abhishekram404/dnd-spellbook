import { Link, useParams } from "react-router-dom";
import { BoldItalic } from "../BoldItalic/BoldItalic";
import { SidebarStyled, SidebarSubtitle } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";
import Button from "../Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  options: SidebarItemType[];
  searchedQuery?: string;
  isLoading?: boolean;
  onItemSelect?: (item: SidebarItemType) => void;
  onFavorite?: (item: SidebarItemType) => void;
};

export default function Sidebar(props: Props) {
  const { index } = useParams();
  const { options, searchedQuery, isLoading, onFavorite } = props;

  return (
    <SidebarStyled>
      {isLoading ? (
        <SidebarSubtitle>Loading...</SidebarSubtitle>
      ) : !options?.length ? (
        <SidebarSubtitle>
          No results found for <BoldItalic>{searchedQuery}</BoldItalic>
          <br />
          <Button variant="link">
            <Icon icon={"mdi:clear-outline"}  />
            Clear search
          </Button>
        </SidebarSubtitle>
      ) : (
        <>
          {searchedQuery?.trim() && (
            <SidebarSubtitle>
              Showing results for{" "}
              <BoldItalic title={searchedQuery}>{searchedQuery}</BoldItalic>
            </SidebarSubtitle>
          )}
          {options?.map((item) => (
            <Link to={`/spells/${item.index}`}>
              <SidebarItem
                {...item}
                onFavoriteClick={() => onFavorite?.(item)}
                isActive={index === item.index}
              />
            </Link>
          ))}
        </>
      )}
    </SidebarStyled>
  );
}
