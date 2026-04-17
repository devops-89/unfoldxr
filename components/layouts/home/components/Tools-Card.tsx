import { TOOL_CARD_PROPS } from "@/utils/types";

import ImageCard from "./tools/ImageCard";

import IconCard from "./tools/IconCard";

const ToolsCard = ({ card }: { card: TOOL_CARD_PROPS }) => {
  switch (card.type) {
    case "image":
      return <ImageCard card={card} />;

    case "icon":
      return <IconCard card={card} />;

    default:
      return null;
  }
};

export default ToolsCard;
