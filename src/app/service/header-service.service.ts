import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
private headerSearch:string;
  constructor() { }

SetSearchValue(SearchValue:string)
{
  this.headerSearch=SearchValue;
}
getheaderSearch(){return this.headerSearch;}
}
