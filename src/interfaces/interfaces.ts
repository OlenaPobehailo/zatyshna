export interface Area {
  coords: string;
  href: string;
  title: string;
  alt: string;
  shape: "rect" | "circle" | "poly";
}

export interface Coordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
