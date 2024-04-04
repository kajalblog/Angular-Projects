import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/food/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];

  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params)
      if (!!params['searchItem']) {

        // this.foods=this.fs.getAllFoods();
        this.foods = this.fs.getAllFoods().filter((food) => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        // console.log(this.foods.filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase())))
      }
      else {
        this.foods = this.fs.getAllFoods();

        // this.getAllData();

      }
    })
  }

  getAllData() {
    this.foods = this.fs.getAllFoods();
  }

}
