import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id:number) : Foods {
return this.getAll().find(food => food.id==id)!;
}

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: "Paneer Balls",
        price: 250,

        favorite: false,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL: '/assets/food2.jpg',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 2,
        name: "Chicken Biryani",
        price: 550,

        favorite: false,
        star: 4.5,
        tags: ["Non-Veg", "Rice"],
        imageURL: '/assets/food3.png',
        cookTime: '20-30',
        origins: ['India','UAE']

      },
      // {
      //   id: 3,
      //   name: "Chicken 65",
      //   price: 150,

      //   favorite: false,
      //   star: 4.8,
      //   tags: ["Fast Food", "Starter","Non-Veg"],
      //   imageURL:'/assets/food4.jpg',
      //   cookTime: '20-30',
      //   origins: ['India']

      // },
      {
        id: 4,
        name: "Cheese Roll",
        price: 450,

        favorite: false,
        star: 3.5,
        tags: ["Fast Food", "Starter","Veg"],
        imageURL: '/assets/food5.jpg',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 5,
        name: "Fish Fry",
        price: 250,

        favorite: false,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL:   '/assets/food6.jpg',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 6,
        name: "Hotdog",
        price: 250,

        favorite: true,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL: '/assets/food7.jpg',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 7,
        name: "Chinese Noodles",
        price: 250,

        favorite: false,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL: '/assets/food8.png',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 8,
        name: "Paneer Popcorn",
        price: 250,

        favorite: false,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL: '/assets/food9.jpg',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 9,
        name: "Pasta",
        price: 250,

        favorite: false,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL: '/assets/food10.png',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 10,
        name: "Pizza Pepperoni",
        price: 250,

        favorite: false,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL: '/assets/food11.jpg',
        cookTime: '20-30',
        origins: ['India']

      },
      {
        id: 11,
        name: "Veg Cutet",
        price: 250,

        favorite: false,
        star: 4.5,
        tags: ["Fast Food", "Starter"],
        imageURL: '/assets/food12.JPG',
        cookTime: '20-30',
        origins: ['India']

      }


    ]
  }
}
