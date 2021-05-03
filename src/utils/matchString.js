export default function matchString(title, overview,  matchString) {
  const lowerMatchString = matchString.toLowerCase(),
  loweTitle = title.toLowerCase(),
  lowerOverview = overview.toLowerCase();


  return loweTitle.includes(lowerMatchString) || lowerOverview.includes(lowerMatchString);
}