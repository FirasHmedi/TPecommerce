export class produit
{
    public ProduitId:number;
    public ProduitName:string;
    public ProduitDescription:string;
    public ProduitImgPath:string;
    public categorie:string;

    constructor(id:number,ProduitName:string,ProduitDescription:string,ImgPath:string,categorie:string){
        this.ProduitId=id;
        this.ProduitName=ProduitName;
        this.ProduitDescription=ProduitDescription;
        this.ProduitImgPath=ImgPath;
        this.categorie=categorie;
    }
}