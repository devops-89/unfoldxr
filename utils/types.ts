import { StaticImageData } from "next/image";

export interface WORKFORCE_CARD_PROPS {
  img: StaticImageData;
  heading: string;
  description: string;
}

export interface INDUSTRY_CHIP_PROPS {
  img: StaticImageData;
  label: string;
}

export interface FUTURE_WORK_CARD_PROPS {
  label: string;
  value: string;
  description: string;
}

export interface OUTCOME_CARD_PROPS {
  number: string;
  label: string;
}

export interface DEVICES_SECTION_DATA_PROPS {
  bgImg?: string;
  img?: StaticImageData;
  heading: string;
  description: string;
  gridSize: number;
}


// Tools section typings


export interface TOOLS_CARD_BASE{
  
  title:string;
  gridSize:number;
  type:"image" | "icon"
}

export interface IMAGE_CARD_PROPS extends TOOLS_CARD_BASE{
  type:"image";
  image: StaticImageData;
  description?:string;
  titleColor?: string;       
  descriptionColor?: string;  
}

export interface ICON_CARD_PROPS extends TOOLS_CARD_BASE{
  type:"icon";
  icons:string[];
}

export type TOOL_CARD_PROPS=IMAGE_CARD_PROPS | ICON_CARD_PROPS;

export interface TOOLS_LEFT_SECTION_PROPS {
  ctaText: string;
  note: string;
  image:StaticImageData
}

export interface TOOLS_RIGHT_SECTION_PROPS {
  subHeading: string;
  cards: TOOL_CARD_PROPS[];
}

// Partners Page Types ================================================================

export interface PARTNERS_METRICS_CARD_PROPS{
  title: string;
  description: string;
  gridSize: {
    xs: number;
    sm?: number;
    md?: number;
  };
}

export interface PARTNERS_WHY_PARTNER_CARD_PROPS{
  title:string;
  description:string;

}


export interface PARTNERS_ECOSYSTEM_CARD_PROPS{
  label:string;
}