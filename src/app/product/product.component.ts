import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { SessionState } from './session.store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  cartItems = [{
    'id': 1, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': 'Coffee beans - 1kg Dark Roast', // name of product
    'price': 83.00 // price of product

  },
  {
    'id': 2, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': 'Yorkshire tea - 100 tea bags', // name of product
    'price': 60.00 // price of product

  },
  {
    'id': 3, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': 'Altered Carbon Season 2', // name of product
    'price': 52.00 // price of product

  },
  {
    'id': 4, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': 'Sony WF-1000XM3 True Wireless Noise Canceling', // name of product
    'price': 74.00 // price of product

  },
  {
    'id': 5, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': 'Macbook Pro 2019 Model 16gb RAM', // name of product
    'price': 50.00 // price of product

  },
  {
    'id': 6, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': 'Asus GL752 gaming laptop', // name of product
    'price': 20.00 // price of product

  },
  {
    'id': 7, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': 'Guinness Draught Cans 440ml 2x Six Packs', // name of product
    'price': 17.00 // price of product

  },
  {
    'id': 8, // Unique Id of the product
    'image': 'https://picsum.photos/200', // image of the product
    'name': '6 Man Tent - Dark blue', // name of product

    'price': 15.00 // price of product

  }];

  listPushToCart = new Array();
  cardNumber = 0;
  loader: boolean;
  selected: any;
  showText = true;
  sessionStateData: any;
  getItemID = 0;
  addedCart: boolean;

  calculatePrice  = 0;
  cartprice: number;
  constructor(private storeService: StoreService) {

    this.loader = false;
    this.selected = 0;
  }

  ngOnInit() {


    this.sessionStateData =  this.storeService.retrieve();
    this.cardNumber = this.sessionStateData.length;
    this.listPushToCart = this.sessionStateData;


    
  }


  pushToCart(item, index) {
    this.showText = false;
    this.selected = index;

    if (this.selected === index) {
      this.loader = true;
   
    }


    setTimeout(() => {
      this.loader = false;
      this.showText = true;
      this.addedCart = true;
      this.listPushToCart.push(item)

      this.listPushToCart.forEach(element => {
        if(item.id === element.id) {
          this.getItemID++;
        }
      });
    
      this.cardNumber = this.listPushToCart.length;
      this.storeService.add(this.listPushToCart);

    }, 2000);
  }




  remove(index, ID) {
    this.listPushToCart.splice(index, 1);
    this.cardNumber = this.listPushToCart.length;
    console.log(this.listPushToCart)
    this.listPushToCart.forEach(element => {
      this.getItemID = element.id;


    });

    this.listPushToCart.forEach(element => {
      if(ID === element.id) {
        this.getItemID++;
      }
    });


 



    
  }


}
