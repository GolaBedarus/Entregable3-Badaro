//FETCH del Array con productos a la API// 

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', 
    body: JSON.stringify({
        
            id: 1,
            nombre: "Balenciaga Hoodie" , 
            precio: 990,
            img : "https://balenciaga.dam.kering.com/m/3958b8d0a7acbd33/Large-659403TKVB61093_F.jpg?v=1",
            cantidad: 1,
        
        
            id: 2,
            nombre: "Balenciaga limited Black T-shirt" , 
            precio: 850,
            img : "https://cdn-images.farfetch-contents.com/19/36/99/56/19369956_44556276_1000.jpg",
            cantidad: 1,
        
        
            id: 3,
            nombre: "Balenciaga white summer t-shirt" , 
            precio: 650,
            img : "https://balenciaga.dam.kering.com/m/7f0541a23529e6e2/Large-612966TIVG59040_F.jpg?v=4",
            cantidad: 1,
        
        
            id: 4,
            nombre: "Balenciaga black boxy t-shirt" , 
            precio: 800,
            img : "https://is4.fwrdassets.com/images/p/fw/z/BALF-MS165_V1.jpg",
            cantidad: 1,
        
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then(response => response.json())
.then(data => console.table(data));

// Array de productos // 


const productos = [
    {
        id: 1,
        nombre: "Balenciaga Hoodie" , 
        precio: 990,
        img : "https://balenciaga.dam.kering.com/m/3958b8d0a7acbd33/Large-659403TKVB61093_F.jpg?v=1",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Balenciaga limited Black T-shirt" , 
        precio: 850,
        img : "https://cdn-images.farfetch-contents.com/19/36/99/56/19369956_44556276_1000.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Balenciaga white summer t-shirt" , 
        precio: 650,
        img : "https://balenciaga.dam.kering.com/m/7f0541a23529e6e2/Large-612966TIVG59040_F.jpg?v=4",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Balenciaga black boxy t-shirt" , 
        precio: 800,
        img : "https://is4.fwrdassets.com/images/p/fw/z/BALF-MS165_V1.jpg",
        cantidad: 1,
    },
];