import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails = [];

  constructor(private _CocktailServiceService :  CocktailServiceService) { } 

  ngOnInit() {

    this.cocktails = this._CocktailServiceService.getCocktails();
  }

}
