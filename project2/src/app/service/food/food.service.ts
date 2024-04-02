import { Injectable } from '@angular/core';

@Injectable()
export class FoodService {

  constructor() { }

  getAllImages():string[]{
    return [
      '/assets/images/1.jpg',
      '/assets/images/3.jpg',
      '/assets/images/4.jpg',
      '/assets/images/5.jpg',
      '/assets/images/1.jpg',
      '/assets/images/3.jpg',
      '/assets/images/4.jpg',
      '/assets/images/5.jpg',
      // '/assets/images/1.jpg'

    ]
  }
}
