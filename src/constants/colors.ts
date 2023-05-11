import { generateCssEvents } from "./utility";

export const backgroundColorVariants: Record<string, string> = {
  blue: "bg-blue-600",
  red: "bg-red-600",
  purple: "bg-purple-600",
  primary: "bg-primary",
};

export const backgroundColorHoverVariants: Record<string, string> =
  generateCssEvents(backgroundColorVariants, "hover");

export const textColorVariants: Record<string, string> = {
  blue: "text-blue-600",
  red: "text-red-600",
  purple: "text-purple-600",
  primary: "text-primary",
};
