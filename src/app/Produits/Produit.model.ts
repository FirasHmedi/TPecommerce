export class produit
{
    public ProduitId:number;
    public ProduitName:string;
    public ProduitDescription:string;
    public prix: number;
    public ProduitImgPath:string;
    public categorie:string;

    constructor(id:number,ProduitName:string,ProduitDescription:string,prix:number,ImgPath:string,categorie:string){
        this.ProduitId=id;
        this.ProduitName=ProduitName;
        this.ProduitDescription=ProduitDescription;
        this.prix=prix;
        this.ProduitImgPath=ImgPath;
        this.categorie=categorie;
    }
}
