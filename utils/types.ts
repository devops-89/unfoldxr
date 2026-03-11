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
