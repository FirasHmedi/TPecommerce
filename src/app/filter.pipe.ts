import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, SearchStatus:string,PrixStatus:number): any {
    if(value.length === 0 || ((SearchStatus==='')&&(PrixStatus===null)))
    {
      return value ;
    }

    const FilterResult=[];
    for(const item of value){
      let prodName=item["ProduitName"].toUpperCase();
      let searchstatus=SearchStatus.toUpperCase();
  //    console.log(prodName+" "+searchstatus);
      if(((prodName.indexOf(searchstatus))!=-1)&&((item["prix"]<=PrixStatus)||((PrixStatus===null))))
      {
        FilterResult.push(item);
      }
    //  console.log(PrixStatus);
    }

    return FilterResult;


}

}
