import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h2>Current Date: {{month}}/{{day}}/{{year}}</h2>
    <h3>{{recipeLyfe}}</h3>
    <div *ngFor='let currentRecipe of recipes'>
     <h4>{{currentRecipe.title}}</h4>
    <ul>
      <li>{{currentRecipe.ingredients}}</li>
    </ul>
    <p>{{currentRecipe.directions}}</p>
  </div>
  `
})

export class AppComponent {
  recipeLyfe: string = 'Recipe Box';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe("Spagete", ["tomato", "pasta", "basil", "E.V.O.O.", "balls", "gaelic"], "boil pasta, mix sauce with balls, eat soon."),
    new Recipe("Chili", ["tomato", "beans", "beef", "hurbs", "chilliP", "cawffe"], "mix together, simmer furever, eat soon."),
    new Recipe("Grilled Chhese", ["tomato", "cheese", "bread", "butta", "mustard", "hot mayo"], "mix together, slap tpgetha, simmer furever, eat soon.")
  ]
}

export class Recipe {
  public done: boolean = false;
  constructor(public title: string, public ingredients:[string], public directions: string) { }
}
