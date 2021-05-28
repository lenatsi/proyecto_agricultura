import { User } from './../models/user.model';
import { UserService } from './../services/user/user.service';
import { Router } from '@angular/router';
import { Login } from './../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planificacion',
  templateUrl: './planificacion.component.html',
  styleUrls: ['./planificacion.component.scss']
})
export class PlanificacionComponent implements OnInit {

  loginVisible = true;
  registerVisible = false;
  loginActive = true;
  registerActive = false;

  isSend = false
  loginForm: FormGroup
  mForm: FormGroup
  emailsignup = ''
  Newpassword = ''
  namesignup= ''

  constructor( private httpClient: HttpClient,
    private notifierService: NotifierService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService){
      this.loginForm = fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$'),
          ],
        ],
      })
      this.mForm = this.fb.group({
        passwordsignup: [
          '',
          [Validators.required, Validators.minLength(6)],(control) => this.validatePasswords(control, 'passwordsignup'),
        ],
        passwordRepeatsignup: [
          '',
          [
            Validators.required,
            (control) => this.validatePasswords(control, 'passwordRepeatsignup'),
          ],
        ],
        emailsignup: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$'),
          ],
        ],
        namesignup: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('^[a-zA-Z]+$'),
          ],
        ],
      })
    }

  loginvisible() {
    this.loginVisible = true;
    this.registerVisible = false
    this.loginActive = true;
    this.registerActive = false;
  }
  registervisible(){
    this.loginVisible = false;
    this.registerVisible = true
    this.loginActive = false;
    this.registerActive = true;
  }
  ngOnInit(){
  }
  get passwordsignup(): AbstractControl {
    return this.mForm.get('passwordsignup')
  }

  get passwordRepeatsignup(): AbstractControl {
    return this.mForm.get('passwordRepeatsignup')
  }
  validatePasswords(control: AbstractControl, name: string) {
    if (
      this.mForm === undefined ||
      this.passwordsignup.value === '' ||
      this.passwordRepeatsignup.value === ''
    ) {
      return null
    } else if (this.passwordsignup.value === this.passwordRepeatsignup.value) {
      if (
        name === 'passwordsignup' &&
        this.passwordRepeatsignup.hasError('passwordMismatch')
      ) {
        this.passwordsignup.setErrors(null)
        this.passwordRepeatsignup.updateValueAndValidity()
      } else if (
        name === 'passwordRepeatsignup' &&
        this.passwordsignup.hasError('passwordMismatch')
      ) {
        this.passwordRepeatsignup.setErrors(null)
        this.passwordsignup.updateValueAndValidity()
      }
      return null
    } else {
      return {
        passwordMismatch: { value: 'Las contraseñas no coinciden' },
      }
    }
  }
  get f() {
    return this.loginForm.controls
  }
  get fs(){
    return this.mForm.controls
  }

  onSave() {
    this.isSend = true
    if (this.loginForm.invalid) {
      this.notifierService.notify( 'error', 'Algo ha ido mal. Prueba hacerlo otra vez.')
      return
    }
    const login: Login = new Login()
    login.email = this.f.email.value
    login.password = this.f.password.value
    this.userService.login(login).subscribe(
      (data) => {
        localStorage.setItem('token', data.access_token)
        this.router.navigate(['/dashboard'])
      },
      (error) => {
        this.notifierService.notify( 'error', 'Algo ha ido mal. Prueba hacerlo otra vez.')
            return
      },
    )
  }

  onSaveSignUp() {
    this.isSend = true
    if (this.mForm.invalid) {
      this.notifierService.notify('error', 'El formulario no es válido')
      return
    }

    const user: User = new User()
    user.email = this.fs.emailsignup.value
    user.password = this.fs.passwordsignup.value
    user.name = this.fs.namesignup.value
    this.userService.signup(user).subscribe(
      (data) => {
        this.router.navigate(['/formulario'])
      },
      (error) => {
        this.notifierService.notify(
          'error',
          'Algo ha ido mal. Prueba hacerlo otra vez.',
        )
        return
      },
    )
    this.notifierService.notify('success', '¡Te has registrado correctamente!')
  }
}
