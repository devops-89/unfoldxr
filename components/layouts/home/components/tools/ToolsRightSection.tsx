// components/tools/ToolsRightSection.tsx

import { Grid } from "@mui/material";
import { TOOLS_RIGHT_SECTION_PROPS } from "@/utils/types";
import ToolsCard from "../Tools-Card";

const ToolsRightSection = ({ cards }: TOOLS_RIGHT_SECTION_PROPS) => {
  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid size={card.gridSize} key={index}>
          <ToolsCard card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ToolsRightSection;