import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../service/header-service.service';
import { FormsModule} from '@angular/forms'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  SearchStatut = new FormControl('');

  constructor(private headerService:HeaderServiceService) { }

  ngOnInit() {
 //   this.SearchStatut='df'
  }
  onClick(ch:string){
    this.headerService.SetSearchValue((this.SearchStatut).value);
    console.log((this.SearchStatut).value);

  }
}
