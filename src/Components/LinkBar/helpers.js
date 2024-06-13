export function formatCategory(category) {
  let noHyphenStr = category.replace("-", " ");
  let categoryArr = noHyphenStr.split(" ");
  for (let i = 0; i < categoryArr.length; i++) {
    categoryArr[i] = categoryArr[i][0].toUpperCase() + categoryArr[i].substr(1);
  }
  let formattedCategory = categoryArr.join(" ");
  return formattedCategory;
}
