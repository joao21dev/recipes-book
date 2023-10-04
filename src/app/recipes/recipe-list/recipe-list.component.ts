import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Teste name Recipe',
      'Test Description',
      'https://blog.ceraflame.com.br/wp-content/uploads/2021/06/Pizza-Napolitana-CERAFLAME-980x515.jpg'
    ),
    new Recipe(
      'Teste name Recipe',
      'Test Description',
      'https://blog.ceraflame.com.br/wp-content/uploads/2021/06/Pizza-Napolitana-CERAFLAME-980x515.jpg'
    ),
    new Recipe(
      'Teste name Recipe',
      'Test Description',
      'https://blog.ceraflame.com.br/wp-content/uploads/2021/06/Pizza-Napolitana-CERAFLAME-980x515.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
