export interface NavItemProps {
  text: string;
  isOpen: boolean;
  onClick?: () => void;
  href?: string;
}