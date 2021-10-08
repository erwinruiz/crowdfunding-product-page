
export type product = {
  id?: number;
  title: string;
  pledge: number;
  text: string;
  units: number;
  isModal?: boolean;
  onSelectProduct?: (id: number) => void;
  isActive?: boolean;
  onEnterPledge?: (pledge?: number) => void;
};
