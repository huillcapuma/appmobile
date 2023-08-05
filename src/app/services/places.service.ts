import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Place } from '../models/place.model';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Storage, ref, uploadBytes, listAll, getDownloadURL,getStorage } from '@angular/fire/storage';
//import { getStorage } from 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private storage = getStorage();
  private images: string[] = [];
  constructor(private firestore: Firestore) { }


  addtarea(place: Place){
    const placeRef = collection(this.firestore, 'tareas');
    return addDoc(placeRef, place);
    
  }
  gettareas(): Observable<Place[]>{
    const placeRef = collection(this.firestore, 'tareas');
    return collectionData(placeRef, {idField:'id'}) as Observable<Place[]>;

  }
  deletetarea(place:Place){
   const placeDocRef = doc(this.firestore, `tareas/${place.id}`);
   return deleteDoc(placeDocRef);

  }

  uploadImage(file: any): Promise<any> {
    const imgRef = ref(this.storage, `images/${file.name}`);

    return uploadBytes(imgRef, file)
      .then(() => {
        return this.getImages(); // Actualizar la lista de imágenes
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  getImages(): Promise<string[]> {
    const imagesRef = ref(this.storage, 'images');
    return listAll(imagesRef)
      .then(async response => {
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
        return this.images;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }

}
