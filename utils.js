// search in an array of objects
// arr - array to search for
// the element that you want to find by id

const getElementCategory = (arr, _id) => {
  if (arr.length) {
    let ids = arr.filter(el => el.id == _id);
    if (ids.length) {
      return [...ids[0].child];
    } else {
      for (const arrItem of arr) {
        let child = getElementCategory(arrItem.child, _id);
        if (child.length) {
          return child;
        }
      }
      return [];
    }
  }
  return [];
};

getElementCategory(categories, query.cid);
