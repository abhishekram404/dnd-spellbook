import { SidebarStyled } from "./Sidebar.styled";
import SidebarItem, { SidebarItemType } from "./SidebarItem";

type Props = {
  options: SidebarItemType[];
};
export default function Sidebar(props: Props) {
  const { options } = props;
  return (
    <SidebarStyled>
      {options?.map((item) => (
        <SidebarItem {...item} />
      ))}
    </SidebarStyled>
  );
}
