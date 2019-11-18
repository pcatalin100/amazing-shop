import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
import { IProduct } from './product';
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeModalFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  openModal(product: IProduct) {    
    this.invokeModalFunction.emit(product);    
  }    
}  