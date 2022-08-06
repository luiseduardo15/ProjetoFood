import {Injectable} from '@angular/core';

@Injectable ({
  providedIn: 'root'
})


export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName: "Fettucine à Bolonhesa",
      foodDetails:"Bolonhesa com molho de tomate",
      foodPrice: 17,
      foodImg: "assets/pasta-fettuccine-bolognese-with-tomato-sauce-in-white-bowl (1).jpg"
    },
    {
      id:2,
      foodName: "Macarrão com Camarão",
      foodDetails: "Camarão, tomate e salsa",
      foodPrice: 36,
      foodImg: "assets/pasta-spaghetti-with-shrimps-tomato-parsley-healthy-meal-italian-food.jpg"
    },
    {
      id:3,
      foodName: "Tagliatelle ao molho branco",
      foodDetails: "Molho branco com ervas e milho",
      foodPrice: 19,
      foodImg: "assets/top-view-creamy-tagliatelle-pasta-with-herbs-corn-pot-table.jpg"
    },
    {
      id:4,
      foodName: "Fettucine ao molho branco com Camarão",
      foodDetails: "Camarão e Cogumelos",
      foodPrice: 36,
      foodImg: "assets/fettucine-white-cream-sauce-with-shrimp-mushroom.jpg"
    },
    {
      id:5,
      foodName: "Macarrão ao molho Pesto",
      foodDetails: "Molho composto por manjericão, pinhões, alho, queijo e azeite com ervilha",
      foodPrice: 25,
      foodImg: "assets/tasty-appetizing-pasta-with-pesto-plate.jpg"
    },
    {
      id:6,
      foodName: "Marisco com Spaguetti",
      foodDetails: "Molho de tomate com Calda de Povo e Flor comestivel",
      foodPrice: 80,
      foodImg: "assets/spaghetti-seafood-with-tomato-sauce-decorated-with-beautiful-ingredients.jpg"
    },
    {
      id:7,
      foodName: "Macarrão com Azeitona roxa",
      foodDetails: "feito com um toque",
      foodPrice: 15,
      foodImg: "assets/pexels-shameel-mukkath-5175547.jpg"
    },
    {
      id:8,
      foodName: "Macarrão ao Molho branco",
      foodDetails: "Molho branco com manjericão",
      foodPrice: 15,
      foodImg: "assets/pexels-shameel-mukkath-9499518.jpg"
    },
    {
      id:9,
      foodName: "Macarrão com Frango Frito",
      foodDetails: "Frango frito acompanhada com Limão",
      foodPrice: 50,
      foodImg: "assets/frying-pan-spiral-macaroni-chicken-leg-meat.jpg"
    },
    {
      id:10,
      foodName: "Macarrão com Queijo",
      foodDetails: "Macarrão com Queijo cremoso e Hortelã",
      foodPrice: 22,
      foodImg: "assets/pexels-shameel-mukkath-5639995.jpg"
    },
    {
      id:11,
      foodName: "Macarrão ao Molho de Tomate",
      foodDetails: "Molho de Tomate com Hortelã",
      foodPrice: 15,
      foodImg: "assets/pexels-shameel-mukkath-5175528.jpg"
    },
    {
      id:12,
      foodName: "Macarrão ao Molho branco com Frango ",
      foodDetails: "Molho branco com frango",
      foodPrice: 22,
      foodImg: "assets/pexels-shameel-mukkath-5175510.jpg"
    }

  ]
}








