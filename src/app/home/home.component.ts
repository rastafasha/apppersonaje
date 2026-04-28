import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  imports: [LottieComponent, NgClass, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  option_selectedd: number = 1;
    solicitud_selectedd: any = 1;

  options: AnimationOptions = {
    path: 'https://lottie.host/148f124a-b35f-445c-9548-1dba636cdc51/7GusgeqAfi.json', // Asegúrate de que el nombre coincida
  };

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
