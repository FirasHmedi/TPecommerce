import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, SearchStatus:string,name:string,prix:number,PrixStatus:number): any {
    if(value.length === 0 || ((SearchStatus==='')&&(PrixStatus===null)))
    {
      return value ; 
    }

    const FilterResult=[];
    for(const item of value){
      if(((item[name].indexOf(SearchStatus))!=-1)&&((item.prix<=PrixStatus)||((PrixStatus===null))))
      {
        FilterResult.push(item);
        
      }
      console.log(PrixStatus);
    }
    
    return FilterResult;
    
  
}
}
