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
    path: 'https://lottie.host/5787ec7f-8813-48cf-9c7d-5baf944504c8/nhz0cdLQVX.json', // Asegúrate de que el nombre coincida
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
