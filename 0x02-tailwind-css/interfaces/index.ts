
// interfaces/index.ts

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

