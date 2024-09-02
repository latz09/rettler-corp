export const FETCH_HOME_PAGE_DATA = `
  *[_type == "home" && isActive == true][0]{
    landingHero{
      "landingImage": landingImage.asset->url,
      heading,
      subheading,
      "logoImage": logoImage.asset->url
    },
    whoWeAre{
      "whoWeAreImage": whoWeAreImage.asset->url
    },
    intro{
      paragraphs,
      youtubeUrl
    },
    services[]{
      serviceTitle,
      "serviceImage": serviceImage.asset->url
    }
  }
`;
