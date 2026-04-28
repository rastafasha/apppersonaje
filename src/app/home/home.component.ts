import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  imports: [CommonModule, LottieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

  option_selectedd: number = 1;
  solicitud_selectedd: any = 1;

  options: AnimationOptions = {
    path: 'assets/animations/personaje_capas.json', // normal esperando
  };
  option2: AnimationOptions = {
    path: './assets/animations/personaje_saludo.json', // saludando
  };
  option3: AnimationOptions = {
    path: './assets/animations/personaje_apuntando.json', // apuntando
  };

  cambiarASaludo() {
    this.options = {
      ...this.options,
      path: './assets/animations/personaje_saludo.json',
      loop: false // El saludo solo se hace una vez
    };
  }

  optionSelected(value: number) {
    this.option_selectedd = value;
    if (this.option_selectedd === 1) {

      // this.ngOnInit();
    }
    if (this.option_selectedd === 2) {
      this.solicitud_selectedd = null;
    }
  }


}
