import { Injectable } from '@angular/core';
import { SessionStore } from './product/session.store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private sessionStore: SessionStore) { }




  updateUserName(list: any) {
    this.sessionStore.update(list);
  } 

  
  add(data){

    localStorage.setItem('list', JSON.stringify(data));

    setTimeout(() => {
      localStorage.clear();
    }, 3600000); // milliseconds to and hour
  }

  retrieve(){
    return JSON.parse(localStorage.getItem('list'));
  }
}
