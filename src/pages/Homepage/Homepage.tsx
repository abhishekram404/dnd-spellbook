import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import useSpells from "../../lib/hooks/useSpells";
import { HomepageBodyStyled, HomepageStyled } from "./Homepage.styled";

export default function Homepage() {
  const { spells, isSpellsLoading } = useSpells();
  console.log(spells);

  if(isSpellsLoading) return "Loading"
  return (
    <HomepageStyled>
      <Navbar />
      <HomepageBodyStyled>
        <Sidebar options={spells.results} />
        <div>Main</div>
      </HomepageBodyStyled>
    </HomepageStyled>
  );
}
