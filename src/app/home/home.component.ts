import { Component} from '@angular/core';
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
    path: 'https://lottie.host/5787ec7f-8813-48cf-9c7d-5baf944504c8/nhz0cdLQVX.json', // normal esperando
  };
  option2: AnimationOptions = {
    path: 'https://lottie.host/058de9be-9c2f-4879-b699-4c9bcfe922a2/oS2zhobnv2.json', // saludando
  };
  option3: AnimationOptions = {
    path: 'https://lottie.host/44d1b6a5-42dc-40e1-940a-41f105bda31d/YcRdaonEjg.json', // apuntando
  };

  cambiarASaludo() {
  this.options = {
    ...this.options,
    path: 'https://lottie.host/058de9be-9c2f-4879-b699-4c9bcfe922a2/oS2zhobnv2.json',
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
