 const productos = [

    {
        "id":1,
        "name":"Zapatillas 1",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        "precio":1234,
        "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202105/18/00117731283234____8__1200x1200.jpg",
        "stock":12
    },
    {
        "id":2,
        "name":"Zapatillas 2",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        "precio":1234,
        "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202111/16/00117730941451____8__1200x1200.jpg",
        "stock":12
    },
    {
        "id":3,
        "name":"Zapatillas 3",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        "precio":1234,
        "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202203/17/00117731286245____4__1200x1200.jpg",
        "stock":12
    },
    {
        "id":4,
        "name":"Zapatillas 4",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        "precio":1234,
        "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202111/11/00117731129114____8__1200x1200.jpg",
        "stock":12
    },
    {
        "id":5,
        "name":"Zapatillas 5",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        "precio":1234,
        "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202207/19/00166969621508____6__1200x1200.jpg",
        "stock":12
    },
    {
        "id":6,
        "name":"Zapatillas 6",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
        "precio":1234,
        "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202207/19/00166969621474____6__1200x1200.jpg",
        "stock":12
    }

]

export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal :( no hay sushi')
      }

    },2000)

  })   ///para practicar, simulando el retardo 

export default productos;