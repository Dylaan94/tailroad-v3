// Homepage content

import {
  ColumnTextLinkProps,
  OurBrandsProps,
  OurServicesBlockProps,
  OurWorkBlockProps,
  TextImageProps,
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

export const textImageContent: TextImageProps = {
  header: "our approach",
  image: "/images/our-approach.png",
  text: "our design process is collaborative and iterative. with every new project we sit down with you and listen to your needs and work through five distinct phases to give you the best quality outcomes",
  link: "/our-approach",
  linkText: "learn more",
};

export const ourWorkContent: OurWorkBlockProps = {
  header: "our work",
  caseStudies: [
    {
      header: "responsive multi-platform development",
      image: "/images/caseStudies/honyakuCloud.png",
      text_1:
        " we specialise in multi platform experiences, utilising the tools most appropriate for your business ",
      text_2: "see our solution to an online translation service below",
      link: "/our-work/honyaku-cloud",
      linkText: "view case study",
    },
    {
      header: "multi-language sites developed in-house",
      image: "/images/caseStudies/hachinohe.png",
      text_1:
        "in house translators handle all of your internationalisation needs, from simple translations to copy that is appropriate for your target market",
      text_2:
        "see our work for a tourism even in Japan in three languages: English, Japanese and Chinese",
      link: "/our-work/hachinohe",
      linkText: "view case study",
    },
  ],
};

const content = {
  columnTextLinkContent,
  ourBrandsContent,
};
