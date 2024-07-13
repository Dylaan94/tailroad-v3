// Component Types

export interface SimpleButtonLinkProps {
  internalLink: boolean;
  text: string;
  link: string;
  bgColour?: string;
  textColour?: string;
  textSize?: string;
}

export interface ColumnTextLinkProps {
  mainText: string;
  subText_1: string;
  subText_2: string;
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
  brand_1?: Brand;
  brand_2?: Brand;
  brand_3?: Brand;
  brand_4?: Brand;
  brand_5?: Brand;
  brand_6?: Brand;
  link: string;
  linkText: string;
}

export interface OurServicesBlockProps {
  header: string;
  services: Service[];
}

export interface TextImageProps {
  header: string;
  image: string;
  text: string;
  link: string;
  linkText: string;
  backgroundColour?: string;
}

export interface TextImageStackProps {
  header?: string;
  image?: string;
  text_1?: string;
  text_2?: string;
  link?: string;
  linkText?: string;
  imageLeft?: boolean;
  delay?: number;
}

export interface OurWorkBlockProps {
  header: string;
  caseStudies: TextImageStackProps[];
}
