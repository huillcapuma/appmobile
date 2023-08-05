import { Injectable } from '@angular/core';
import { Auth , createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail  } from '@angular/fire/auth';
import { AlertService } from './alert.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: Auth,
    private alerteService: AlertService
    ) { }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  recuperarContraseña(email:string)
  {
    return sendPasswordResetEmail(this.auth, email)
    .then(() => {
      // Password reset email sent successfully.
      // You can display a success message or redirect the user to a confirmation page.
      this.alerteService.presentAlert('Enviado','Correo electrónico de restablecimiento de contraseña enviado!','Verfique su Correo',['Ok']);
    })
    .catch((error) => {
      this.alerteService.presentAlert('Falla','Error al enviar el correo electrónico de restablecimiento de contraseña. Por favor, inténtelo de nuevo más tarde.', 'Verifique si el correo registrado es correcto',['Ok']);
      console.error('Password reset error:', error);
    });
  }
}
