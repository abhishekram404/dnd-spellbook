import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import useSpells from "../../lib/hooks/useSpells";
import { HomepageBodyStyled, HomepageStyled } from "./Homepage.styled";

export default function Homepage() {
  const { spells, isSpellsLoading } = useSpells();

  return (
    <HomepageStyled>
      <Navbar />
      <HomepageBodyStyled>
        <Sidebar
          options={spells?.results}
          onFavorite={(item) => console.log("favorite", item)}
          onItemSelect={(item) => console.log("select", item)}
        />
        <div>Main</div>
      </HomepageBodyStyled>
    </HomepageStyled>
  );
}
