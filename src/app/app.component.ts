import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Exercice pour la quête mais ce n'est pas le challenge

  // title: string = 'Raclette party 🧀';

  // isThisIngredientVital: boolean = true;

  // isGuestListDisplayed: boolean = true;

  // songList: string[] = [
  //   "Alejandro",
  //   "Ne me quitte pas",
  //   "Le temps est bon"
  // ];

  // Challenge ci-dessous

  isAdmin: boolean = true;

  switchBoolean(): void  {
    this.isAdmin = !this.isAdmin;
  }

}
