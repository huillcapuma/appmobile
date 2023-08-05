import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places.service';
import { ToastService } from 'src/app/services/toast.service';
import { Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-nuevatarea',
  templateUrl: './nuevatarea.page.html',
  styleUrls: ['./nuevatarea.page.scss'],
})
export class NuevatareaPage implements OnInit {
  formulario: FormGroup;
  selectedFile: File | null = null;
 // images: string[];

  constructor(
    private placesService: PlacesService,
    private loadingCtrl: LoadingController,
    private toastService: ToastService,
    private router: Router,
    private storage: Storage
  ) {
    // this.images = [];
    this.formulario = new FormGroup({
      name: new FormControl(),
      responsable: new FormControl(),
      descripcion: new FormControl(),
      fechalimite: new FormControl(),
      images: new FormControl()
    })
   }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.formulario.value);

    if (this.selectedFile) {
      try {
        const imageUrl = await this.placesService.uploadImage(this.selectedFile);
        this.formulario.patchValue({ images: imageUrl });
      } catch (error) {
        console.log(error);
        // Manejar el error al cargar la imagen (opcional)
      }
    }

    const response = await this.placesService.addtarea(this.formulario.value);
    console.log(response);

    const loading = await this.loadingCtrl.create();
    await loading.present();
    loading.dismiss().then(() => {
      this.toastService.presentToast('Guardado exitoso', 3000, 'top');
      this.router.navigateByUrl('/listatareas');
    });
  }



  
  onFileSelected(event: any) {
    // Guardar el archivo seleccionado en la variable selectedFile
    this.selectedFile = event.target.files[0];
  }

  /*uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(Response => {
        console.log(Response)
        this.getImages();

      })
      .catch(error => console.log(error));
  }
  getImages() {
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
      .then(async response => {
        console.log(response)
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error => console.log(error));
  }*/
}
