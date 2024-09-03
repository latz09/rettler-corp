export const FETCH_CAROUSEL_IMAGES = `
*[_type == "ourExperience" && isActive == true][0]{
  images[]{
    "imageUrl": image.asset->url,
    title,
    location,
  }
}
`;
