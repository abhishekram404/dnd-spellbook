import useSpells from "./lib/hooks/useSpells";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const spells = useSpells();
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
