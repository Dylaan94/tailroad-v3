// Component Types

export interface SimpleButtonLinkProps {
  internalLink: boolean;
  text: string;
  link: string;
  bgColour?: string;
  textColour?: string;
}

export interface ColumnTextLinkProps {
  mainText: string;
  subText: string[];
  linkText: string;
  linkUrl: string;
}

export interface Brand {
  name: string;
  image: string;
}

export interface Service {
  name: string;
  link: string;
}

export interface OurBrandsProps {
  header: string;
  brands: Brand[];
  link: string;
  linkText: string;
}

export interface OurServicesBlockProps {
  header: string;
  services: Service[];
}
