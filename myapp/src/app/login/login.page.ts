import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { AutenticationService } from '../servicios/autentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private contentElement: any;

  constructor(private animationCtrl: AnimationController,private auth: AutenticationService, private router: Router) { }
    mensaje=""
  public user = {
    usuario: "",
    password: ""
  }


  ngOnInit() {
    
    this.contentElement = document.querySelector('.ion-content');
    
  }

  ionViewDidEnter() {
    this.playFadeInAnimation();
  }

  playFadeInAnimation() {
    if (this.contentElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(this.contentElement)
        .duration(1000) // Duración de la animación en milisegundos
        .fromTo('opacity', '0', '1'); // Configuración de la animación de opacidad

      animation.play();
    }
  }
  enviarInformacion() {
    this.auth.login(this.user.usuario, this.user.password)
    if (this.auth.autenticado) {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      }
      this.router.navigate(['/login'], navigationExtras);
    } else {
      this.mensaje = "Debe ingresar sus credenciales";
    }
  }
  mostrarConsola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado";
    } else {
      this.mensaje = "Usuario y contraseña deben tener algun valor"
    }
  }
}

