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
  type:"image" | "dark" | "chat" | "icon"
}

export interface IMAGE_CARD_PROPS extends TOOLS_CARD_BASE{
  type:"image";
  image:string | StaticImageData;
  bg:"gradient" | "solid";
}

export interface DARK_CARD_PROPS extends TOOLS_CARD_BASE{
  type:"dark";
  description:string;
  image:string | StaticImageData;
}

export interface CHAT_CARD_PROPS extends TOOLS_CARD_BASE{
  type:"chat";
  description:string;
}

export interface ICON_CARD_PROPS extends TOOLS_CARD_BASE{
  type:"icon";
  icons:string[];
}

export type TOOL_CARD_PROPS=IMAGE_CARD_PROPS | DARK_CARD_PROPS | CHAT_CARD_PROPS | ICON_CARD_PROPS;

export interface TOOLS_LEFT_SECTION_PROPS {
  heading: string;
  ctaText: string;
  note: string;

  avatars: {
    id: number;
    name: string;
    image: string;
  }[];
}

export interface TOOLS_RIGHT_SECTION_PROPS {
  subHeading: string;
  cards: TOOL_CARD_PROPS[];
}
