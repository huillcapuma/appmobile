import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.page.html',
  styleUrls: ['./registrarusuario.page.scss'],
})
export class RegistrarusuarioPage implements OnInit {
  
  formReg: FormGroup;
  
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService
    ) {
      this.formReg = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d+/)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  
      },{validator: this.passwordMatchValidator})

     }

  ngOnInit(): void {
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.toastService.presentToast('Registro exitoso', 3000, 'top');
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
