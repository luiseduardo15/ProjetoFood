import { CarrinhoModel } from '../pages/about/about.model';
import {Injectable} from '@angular/core';

@Injectable ({
  providedIn: 'root'
})


export class OrderDetailsService {

  constructor() { }

  foodDetails: CarrinhoModel [] = [

    new CarrinhoModel ('Luis', 1,'A', 1, 'Fettucine à Bolonhesa', 'Bolonhesa com molho de tomate', 17, "assets/pasta-fettuccine-bolognese-with-tomato-sauce-in-white-bowl (1).jpg"),
    new CarrinhoModel ('Luis', 2,'B', 2, 'Macarrão com Camarão', 'Camarão, tomate e salsa', 36, "assets/pasta-spaghetti-with-shrimps-tomato-parsley-healthy-meal-italian-food.jpg"),
    new CarrinhoModel ('Luis', 3,'C', 3, 'Tagliatelle ao Molho Branco', 'Molho branco com ervas e milho', 19,  "assets/top-view-creamy-tagliatelle-pasta-with-herbs-corn-pot-table.jpg"),
    new CarrinhoModel ('Luis', 4,'D', 4, 'Fettucine ao molho branco com Camarão', 'Camarão e Cogumelos', 36, "assets/fettucine-white-cream-sauce-with-shrimp-mushroom.jpg"),
    new CarrinhoModel ('Luis', 5,'E', 5, 'Macarrão ao molho Pesto', 'Composto por manjericão', 25, "assets/tasty-appetizing-pasta-with-pesto-plate.jpg"),
    new CarrinhoModel ('Luis', 6,'F', 6, 'Marisco com Spaguetti', 'Calda de Povo e Flor Comestivel', 80,  "assets/spaghetti-seafood-with-tomato-sauce-decorated-with-beautiful-ingredients.jpg"),
    new CarrinhoModel ('Luis', 7,'G', 7, 'Macarrão com Azeitona roxa', 'feito com um toque', 15, "assets/pexels-shameel-mukkath-5175547.jpg"),
    new CarrinhoModel ('Luis', 8,'H', 8, 'Macarrão ao Molho branco', 'Molho branco com manjericão', 15,  "assets/pexels-shameel-mukkath-9499518.jpg"),
    new CarrinhoModel ('Luis', 9,'I', 9, 'Macarrão com Frango Frito', 'Frango frito acompanhada com Limão', 50,  "assets/frying-pan-spiral-macaroni-chicken-leg-meat.jpg"),
    new CarrinhoModel ('Luis', 10,'J', 10, 'Macarrão com Queijo', 'Macarrão com Queijo cremoso e Hortelã', 22,  "assets/pexels-shameel-mukkath-5639995.jpg"),
    new CarrinhoModel ('Luis', 11,'K',11, 'Macarrão ao Molho de Tomate', 'Molho de Tomate com Hortelã', 15, "assets/pexels-shameel-mukkath-5175528.jpg"),
    new CarrinhoModel ('Luis', 12,'L',12, 'Macarrão ao Molho branco com Frango', 'Molho branco com frango', 22, "assets/pexels-shameel-mukkath-5175510.jpg"),


  ]
}


  /*  {
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


}*/







