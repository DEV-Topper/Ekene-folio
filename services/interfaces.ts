import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface iWork {
  name?: string;
  type?: string;
  info?: string | ReactNode;
  shortInfo?: string;
  role?: string;
  responsibility?: string;
  url?: string;
  lgImg?: StaticImageData;
  moreInfo?: string | ReactNode;
  workingShot?: StaticImageData;
  usedProgram?: StaticImageData;
  usedProgramTxt?: string;
  demoVid?: string;
}
