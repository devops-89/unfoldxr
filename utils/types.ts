import { StaticImageData } from "next/image";
import React from "react";
export interface WORKFORCE_CARD_PROPS {
  img?: StaticImageData;
  icon?: any;
  heading: string;
  description: string;
}
export interface INDUSTRY_CHIP_PROPS {
  img?: StaticImageData;
  icon?: any;
  label: string;
}
export interface FUTURE_WORK_CARD_PROPS {
  label: string;
  value: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface OUTCOME_CARD_PROPS {
  number: string;
  label: string;
  link?: string;
}

export interface DEVICES_SECTION_DATA_PROPS {
  bgImg?: string;
  img?: StaticImageData;
  heading: string;
  description: string;
  gridSize: number;
  bgColor?: string;
  textColor?: string;
}

export interface TOOLS_CARD_BASE{
  
  title:string;
  gridSize:number;
  type:"image" | "icon"
}

export interface IMAGE_CARD_PROPS extends TOOLS_CARD_BASE{
  type:"image";
  image?: StaticImageData | string;
  video?: string;
  description?:string;
  titleColor?: string;       
  descriptionColor?: string;  
  tag?: string;
  link?: string;
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

export interface PARTNERS_CLIENT_BUSINESS_CARD_PROPS{
  id:number;
  title:string;
  description:string;
}

export interface PARTNERS_EXISITNG_PARTNERS_CHIP_PROPS{
  image:StaticImageData
}

// Contact Section Types =========================================================

export interface CONTACTFORMFIELD {
  name: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

export interface CONTACT_FORM_DATA{
  formFields:CONTACTFORMFIELD[];
  buttonText:string;
}




export interface ABOUT_PAGE_HERO_PROPS {
  heading: string;
  cta: string;
}

export interface ABOUT_INTRO_SECTION_PROPS {
  heading: string;
  paragraphs: string[];
  highlight: string;
}

export interface BRAND_DNA_PROPS {
  title: string;
  description: string;
}

export interface MISSION_VISION_PROPS {
  title: string;
  heading: string;
  subHeading: string;
  description: string;
  brandDnaTitle: string;
  brandDna: BRAND_DNA_PROPS[];
}

export interface LEADERSHIP_MEMBER_PROPS {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface LEADERSHIP_SECTION_PROPS {
  title: string;
  members: LEADERSHIP_MEMBER_PROPS[];
}

export interface DIFFERENTIATOR_ITEM_PROPS {
  title: string;
  description: string;
  icon: any; // SVG or string path
}

export interface DIFFERENTIATORS_SECTION_PROPS {
  heading: string;
  items: DIFFERENTIATOR_ITEM_PROPS[];
  image: string;
}

export interface NEWS_SECTION_PROPS {
  title: string;
  description: string;
}

export interface CAREERS_SECTION_PROPS {
  title: string;
  description: string;
  values: string[];
  bottomText: string;
}

export interface FINAL_CTA_SECTION_PROPS {
  heading: string;
}

export interface INDUSTRY_HERO_PROPS {
  title: string;
  description: string;
  image: string;
}

export interface INDUSTRY_REALITY_NEEDS_PROPS {
  title: string;
  realities: string[];
  needs: string[];
  bottomText: string;
  ctaText: string;
}

export interface INDUSTRY_PHASE_PROPS {
  phase: string;
  items: string[];
}

export interface INDUSTRY_OPERATION_FLOW_PROPS {
  title: string;
  phases: INDUSTRY_PHASE_PROPS[];
}

export interface INDUSTRY_USE_CASES_PROPS {
  title: string;
  items: string[];
  ctaText: string;
}

export interface INDUSTRY_OUTCOME_METRIC_PROPS {
  value: string;
  text: string;
}

export interface INDUSTRY_OUTCOMES_PROPS {
  title: string;
  image: string;
  metrics: INDUSTRY_OUTCOME_METRIC_PROPS[];
}

export interface INDUSTRY_PAGE_PROPS {
  heroSection: INDUSTRY_HERO_PROPS;
  realityNeedsSection: INDUSTRY_REALITY_NEEDS_PROPS;
  operationFlowSection: INDUSTRY_OPERATION_FLOW_PROPS;
  useCasesSection: INDUSTRY_USE_CASES_PROPS;
  outcomesSection: INDUSTRY_OUTCOMES_PROPS;
  finalCtaSection: {
    heading: string;
    description: string;
    ctaText: string;
    ctaIcon: string;
  };
}
