const oneProduct={
    "id":1,
    "name":"Zapatillas 1",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
    "precio":1234,
    "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202105/18/00117731283234____8__1200x1200.jpg",
    "stock":12
};

const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProduct);
    }, 2000);
  });
  
  export default getOneProduct;