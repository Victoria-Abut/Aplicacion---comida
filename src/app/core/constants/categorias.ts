import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://adrianacotte.com/wp-content/uploads/2021/05/hamburguesa01.jpeg",
        productos: [{
          nombre:"Hamburguesa con queso",
          precio: 1000,
          descripcion: "",
          imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar"
        },
        {
          nombre:"Doble cuarto de libra con queso",
          precio: 1500,
          descripcion: "",
          imagen: "https://elsheriffburger.com/uploads/lh90_elsheriffbuger/products/54/es/img-H.-Especial-5-WEB-de-taman%CC%83o-mediano.jpg"
        },
        {
          nombre:"Big mac",
          precio: 1300,
          descripcion: "",
          imagen: "https://img.cronista.com/files/image/470/470634/62ddca6aaa238_360_202!.webp?s=1565f502948f8a6418167890e2df942a&d=1689811707&oe=png"
        },
        {
          nombre:"Doble carne doble queso",
          precio: 1250,
          descripcion: "",
          imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krXm2g5T/200/200/original?country=ar"
        },
        {
          nombre:"Cuarto de libra",
          precio: 3500,
          descripcion: "",
          imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXTUDbN/200/200/original?country=ar"
        },
        {
          nombre:"Grand tasty",
          precio: 2000,
          descripcion: "",
          imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mcdonalds.com.ar%2Fproductos%2Fhamburguesas%2Fgrand-tasty-turbo-bacon-triple&psig=AOvVaw0SRbGdt_mIXEbfDMuLPNr1&ust=1699639980305000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiT3rvCt4IDFQAAAAAdAAAAABAE"
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://media.lacapital.com.ar/p/380d0eb98981068e65762392d022a71e/adjuntos/204/imagenes/022/627/0022627649/1200x675/smart/pizzajpeg.jpeg",
        productos: [
          {
            nombre: 'Pizza común',
            precio: 1000,
            descripcion: "Pizza.",
            imagen:
              'https://cremigal.com/archivos/2022/04/CREMIGAL-10-scaled.jpg',
          },
          {
            nombre: 'Pizza especial',
            precio: 1200,
            descripcion: "Típica pizza estilo porteño, con muchos morrones.",
            imagen:
              'https://assets.unileversolutions.com/recipes-v2/217207.jpg',
          },
          {
            nombre: 'Pizza 3 quesos',
            precio: 1300,
            descripcion: "Pizza que combina los mejores quesos: provolone, muzarella y roquefort.",
            imagen:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKYNeGpt27tRyqzbirhQjE2v6D-tze7WYeg&usqp=CAU',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg",
        productos: [
          {
            nombre: 'Tiramisú',
            precio: 800,
            descripcion: "Clasico tiramisú al estilo italiano.",
            imagen: 'https://www.gourmet.cl/wp-content/uploads/2011/04/tiramisu1.jpg',
          },
          {
            nombre: 'Chocotorta',
            precio: 800,
            descripcion: "Porción de chocotorta.",
            imagen:
              'https://www.cronista.com/files/image/468/468611/62c8901ff0951.jpg',
          },
          {
            nombre: 'Turrón de Quaker',
            precio: 800,
            descripcion: "Turrón con avena, chocolate y manteca",
            imagen:
              'https://www.encasacookingspace.com/wp-content/uploads/2019/05/Turron-Napolitano-6.jpg',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://www.aguaparatuvida.com.ar/img/novedades/106.jpg",
        productos: [{
          nombre: 'Agua',
          precio: 100,
          descripcion: "Agua mineral 500cc",
          imagen:
            'https://acdn.mitiendanube.com/stores/798/865/products/48146782-8488201d17fe506c1f16639330522874-480-0.jpg',
        },
        {
          nombre: 'Coca cola',
          precio: 100,
          descripcion: "Coca cola comun/light",
          imagen:
            'https://acdn.mitiendanube.com/stores/861/458/products/340341-3359c763f08b338b2b15680466868435-1024-1024.jpg',
        },
        {
          nombre: 'Sprite',
          precio: 100,
          descripcion: "Sprite comun/cero",
          imagen:
            'https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/s/p/sprite_lata3.jpg',
        },]
    }
]
