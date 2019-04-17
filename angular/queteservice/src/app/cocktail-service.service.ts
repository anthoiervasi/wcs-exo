import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor() { }

  getCocktails(){

    return [
      {name : "Pinacolada", price : 8, img : './assets/cocktail-pinacoloada.jpg'},
      {name : "Kamikaze", price : 7, img : './assets/cocktail-kamikaze.jpg'},
      {name : "Cuba libre", price : 7, img : './assets/cocktail-cubalibre.jpg'},
      {name : "Cosmopolitan", price : 8, img : './assets/cocktail-cosmopolitan.jpg'},
      
    ]
  }
}
