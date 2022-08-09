export class CarrinhoModel { 

    public nome: string;
    public fone: number;
    public endereco: string;
  
    public id: number;
    public itemName: string;
    public itemDetails: string;
    public itemPrice: number;
    public itemImg: string;
  
    constructor(nome: string, fone:number, endereco: string, id: number, itemName: string, itemDetails: string, itemPrice: number, itemImg: string){
        this.nome = nome;
        this.fone = fone;
        this.endereco = endereco;
  
        this.id = id;
        this.itemName = itemName;
        this.itemDetails = itemDetails;
        this.itemPrice = itemPrice;
        this.itemImg = itemImg;
    }
  
  
  }