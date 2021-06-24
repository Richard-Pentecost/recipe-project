import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Garlic-Butter-Steak_EXPS_SDFM18_45362_C10_11_4b.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Garlic-Butter-Steak_EXPS_SDFM18_45362_C10_11_4b.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
