import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDocs, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

async  writeData(data:any) { 

  
await addDoc(collection(this.firestore, "subscribers"), data);
  }


 
}

