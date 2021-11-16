export const chooseColor = (color) => {
  return new Promise((resolve, reject) => {
    let colorOfBoard = JSON.parse(window.localStorage.getItem('colorBoard'));
    if (!colorOfBoard) colorOfBoard = {};
    colorOfBoard.color = color;
    window.localStorage.setItem('colorBoard', JSON.stringify(colorOfBoard));
    resolve({data: colorOfBoard})
  })
}

export const chooseCategory = (values) => {
  return new Promise((resolve, reject) => {
    let categoriesOfBoard = JSON.parse(window.localStorage.getItem('categoriesBoard'));
    if (!categoriesOfBoard) categoriesOfBoard = {};
    categoriesOfBoard.values = values;
    window.localStorage.setItem('categoriesBoard', JSON.stringify(categoriesOfBoard));
    console.log('categoriesBoard', categoriesOfBoard)
    resolve({data: categoriesOfBoard.values})
  })
}

export const chooseLayout = (layout) => {
  return new Promise((resolve, reject) => {
    let layoutOfBoard = JSON.parse(window.localStorage.getItem('layoutOfBoard'));
    if (!layoutOfBoard) layoutOfBoard = '';
    layoutOfBoard = layout;
    window.localStorage.setItem('layoutOfBoard', JSON.stringify(layoutOfBoard));
    console.log('layoutOfBoard', layoutOfBoard)
    resolve({data: layoutOfBoard})
  })
}
