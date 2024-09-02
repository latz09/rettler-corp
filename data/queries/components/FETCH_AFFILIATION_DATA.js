export const FETCH_AFFILIATION_DATA = `
*[_type == "logoGroups" && isActive == true][0]{
  logos[]{
    "imageUrl": asset->url,
    
  }
}
`;
