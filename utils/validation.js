export const validateCreateProduct = (product, images) => {
  const { sizes, details, questions, color, subCategories } = product;

  let checks = [];

  if (images?.length < 3) {
    checks.push({
      msg: `Choose at least 3 images, (${3 - images?.length}) remaining`,
      type: 'error',
    });
  }

  if (color?.color === '' || color?.image === '') {
    checks.push({
      msg: 'Please enter a color and image for product style.',
      type: 'error',
    });
  }

  if (subCategories?.length === 0) {
    checks.push({
      msg: 'Please enter at least one subcategory.',
      type: 'error',
    });
  }

  sizes?.map((el) => {
    if (
      el.price === '' ||
      el.qty === '' ||
      (el.size !== undefined && el.size === '')
    ) {
      checks.push({
        msg: `Please enter ${
          el.size !== undefined ? 'size,' : ''
        } quantity and price`,
        type: 'error',
      });
    }
  });

  details?.map((el) => {
    if (el.name === '' || el.value === '') {
      checks.push({
        msg: `Please enter details name and value`,
        type: 'error',
      });
    }
  });

  questions?.map((el) => {
    if (el.question === '' || el.answer === '') {
      checks.push({
        msg: `Please enter question and answer`,
        type: 'error',
      });
    }
  });

  return checks;
};
