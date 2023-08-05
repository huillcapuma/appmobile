import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-recuperacontrasena',
  templateUrl: './recuperacontrasena.page.html',
  styleUrls: ['./recuperacontrasena.page.scss'],
})
export class RecuperacontrasenaPage implements OnInit {
  userEmail = new FormControl('');
  constructor(
    private userService: UserService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }
  async onReset() {
    const email = this.userEmail.value;
    // Verifica si el valor de email no es nulo antes de llamar al servicio.
    if (email !== null) {
      try {
        await this.userService.recuperarContraseña(email);
        //window.alert('Correo electrónico enviado, revisa tu bandeja de entrada!');
        this.toastService.presentToast('Correo electrónico enviado, revisa tu bandeja de entrada!', 3000, 'top');
        this.router.navigate(['/login']);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error('El valor del correo electrónico es nulo.');
    }
  }

}
