export class CarrinhoModel {

    public nome: string;
    public fone: number;
    public endereco: string;

    public id: number;
    public foodName: string;
    public foodDetails: string;
    public foodPrice: number;
    public foodImg: string;

    constructor(nome: string, fone:number, endereco: string, id: number, foodName: string, foodDetails: string, foodPrice: number, foodImg: string){
        this.nome = nome;
        this.fone = fone;
        this.endereco = endereco;

        this.id = id;
        this.foodName = foodName;
        this.foodDetails = foodDetails;
        this.foodPrice = foodPrice;
        this.foodImg = foodImg;
    }


  }
