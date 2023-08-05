import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from 'src/app/services/places.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.page.html',
  styleUrls: ['./listatareas.page.scss'],
})
export class ListatareasPage implements OnInit {

  tareas: Place[];
  images: string[];

  constructor(
    private placesService: PlacesService,
    private toastService: ToastService
  ) {
    this.tareas = [];
    this.images = [];
  }

  ngOnInit() {
    this.placesService.gettareas().subscribe(places => {
      console.log(places);
      this.tareas = places;
    });
   /* this.placesService.getImages().then(images => {
      this.images = images;
    });*/
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletetarea(place);
    console.log(response);
    this.toastService.presentToast('Borrado de la Lista', 3000, 'top');
  }

}
