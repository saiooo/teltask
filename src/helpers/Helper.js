export const unflatCatList = (categories) => {
  const map = new Map();
  categories.forEach((category) => {
    map.set(category.id, { ...category, subcategories: [] });
  });

  categories.forEach((category) => {
    if (category.parentCategoryId !== null) {
      const parent = map.get(category.parentCategoryId);
      parent.subcategories.push(map.get(category.id));
    }
  });

  const result = [];
  map.forEach((value) => {
    if (value.parentCategoryId === null) {
      result.push(value);
    }
  });
  return result;
};

export const flatCatList = (categories) => {
  return categories.reduce((acc, category) => {
    acc.push({
      id: category.id,
      name: category.name,
      parentCategoryId: category.parentCategoryId,
      userIDs: category.userIDs,
    });

    if (category.subcategories) {
      const subcategories = flatCatList(category.subcategories);
      acc.push(...subcategories);
    }

    return acc;
  }, []);
};

export const checkIfNumber = (val) => {
  return isNaN(val) ? val : Number(val);
};

export const makeMaxTierCatList = (categories, maxDepth) => {
  return categories.map((category) => {
    const subcategories = category.subcategories || [];
    if (maxDepth > 1 && subcategories.length > 0) {
      return {
        ...category,
        subcategories: makeMaxTierCatList(subcategories, maxDepth - 1),
      };
    } else {
      return {
        ...category,
        subcategories: [],
      };
    }
  });
};
