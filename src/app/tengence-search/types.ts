export interface DataType {
  key: string;
  title: string;
  type?: string;
  tengence?: boolean;
  algolia?: boolean;
  ali?: boolean;
  unbxd?: boolean;
  aws?: boolean;
  elastic?: boolean;
  row?: number;
  categoryId?: string;
}

export interface AdvantageCard {
  title: string;
  items: string[];
}

export interface FeatureCategory {
  id: string;
  title: string;
}
