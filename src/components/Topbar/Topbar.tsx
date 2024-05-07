import { Icon } from "@iconify/react/dist/iconify.js";
import { InfoBar } from "../../pages/Homepage/Homepage.styled";

export default function Topbar() {
  return (
    <InfoBar>
      Made with <Icon icon={"fluent-emoji-flat:red-heart"} /> by
      <b>Keshav Kishor Ram</b>
    </InfoBar>
  );
}
