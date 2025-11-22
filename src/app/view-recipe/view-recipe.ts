import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-view-recipe',
  imports: [Header, Footer, RouterLink],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe {

}
