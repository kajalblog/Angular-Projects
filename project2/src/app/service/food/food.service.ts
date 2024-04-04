import { Injectable } from '@angular/core';
import { Foods } from '../../shared/food/food';
@Injectable()
export class FoodService {

  constructor() { }

  getAllFoods():Foods[] {
    return [
      {
        id: 1,
        name: 'pizza',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/1.jpg',
        cookTime: '10-20',
        origins: ['italy']
      },
      {
        id: 2,
        name: 'meetball',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/2.jpg',
        cookTime: '10-20',
        origins: ['italy']
      },
      {
        id: 3,
        name: 'Pizza',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/4.jpg',
        cookTime: '10-20',
        origins: ['italy']
      },
      {
        id: 4,
        name: 'Pizza',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/5.jpg',
        cookTime: '10-20',
        origins: ['italy']
      },
      {
        id: 5,
        name: 'Pizza',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/6.jpg',
        cookTime: '10-20',
        origins: ['italy']
      },
      {
        id: 6,
        name: 'Pizza',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/1.jpg',
        cookTime: '10-20',
        origins: ['italy']
      },
      {
        id: 7,
        name: 'Pizza',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/2.jpg',
        cookTime: '10-20',
        origins: ['italy']
      },
      {
        id: 8,
        name: 'Pizza',
        price: 200,
        favourite: true,
        stars: 4.5,
        tags: ['fastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/4.jpg',
        cookTime: '10-20',
        origins: ['italy']
      }

    ]
  }
}
