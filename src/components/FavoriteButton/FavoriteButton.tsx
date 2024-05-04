import styled from "styled-components";
import { Icon } from "@iconify/react";

const OUTLINED = "material-symbols:favorite-outline";
const FILLED = "material-symbols:favorite";

export default function FavoriteButton({
  isFavorite,
}: {
  isFavorite: boolean;
}) {
  return (
    <Root isFavorite={isFavorite}>
      <Icon
        icon={isFavorite ? FILLED : OUTLINED}
        fontSize={22}
        color={isFavorite ? "#ef423f" : "currentColor"}
      />
    </Root>
  );
}

const Root = styled.div<{ isFavorite?: boolean }>`
  padding: 0.5rem;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  transition: 0.2s all linear;

  &:hover {
    background-color: ${(props) => (props.isFavorite ? "#fefbf6" : "#ef423f")};
  }
`;
