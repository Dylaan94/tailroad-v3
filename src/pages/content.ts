// Homepage content

import {
  ColumnTextLinkProps,
  OurBrandsProps,
  OurServicesBlockProps,
} from "@/types";

export const columnTextLinkContent: ColumnTextLinkProps = {
  mainText:
    "tailroad, a fullstack web agency pushing the boundaries of digital design and development",
  subText: [
    "creating websites is more than just code, its understanding your businesss and the impact that you want to have online and how the world sees you",
    "creativity with a focus on one thing: results",
  ],

  linkText: "contact us",
  linkUrl: "/contact-us",
};

export const ourBrandsContent: OurBrandsProps = {
  header: "brands we've worked with",
  brands: [
    {
      name: "Honyaku Cloud",
      image: "/images/brands/honyaku.png",
    },
    {
      name: "Queen & Co",
      image: "/images/brands/queenco.png",
    },
    {
      name: "Crest Environmental",
      image: "/images/brands/crest.png",
    },
    {
      name: "Hachinohe City",
      image: "/images/brands/hachinohe.png",
    },
    {
      name: "Asoviva",
      image: "/images/brands/asoviva.png",
    },
    {
      name: "Manabu Dev",
      image: "/images/brands/manabu.png",
    },
  ],
  link: "/our-work",
  linkText: "view our case studies",
};

export const ourServicesContent: OurServicesBlockProps = {
  header: "our services",
  services: [
    {
      name: "website development",
      link: "/our-services/website-development",
    },
    {
      name: "website design",
      link: "/our-services/website-design",
    },
    {
      name: "e-commerce development",
      link: "/our-services/e-commerce-development",
    },
    {
      name: "mobile app development",
      link: "/our-services/mobile-app-development",
    },
    {
      name: "web app development",
      link: "/our-services/web-app-development",
    },

    {
      name: "search engine optimisation (SEO)",
      link: "/our-services/seo",
    },
    {
      name: "internationalisation",
      link: "/our-services/internationalisation",
    },
    {
      name: "brochure design",
      link: "/our-services/brochure-design",
    },
  ],
};

const content = {
  columnTextLinkContent,
  ourBrandsContent,
};
