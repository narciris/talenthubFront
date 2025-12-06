import { Component, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { BlockService } from '../../../../core/services/blocks.service';



@Component({
  selector: 'app-home',
  imports: [InputSwitchModule,FormsModule,ButtonModule,CardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    // encapsulation: ViewEncapsulation.None 
})
export class HomeComponent {
    // Controles globales
  globalPermisos = true;
  disabledItems = false;
  disableBonds = false;
  globalBonificaciones = true;
  checked:boolean = false;
  usuarios:any[] =[];

  public changeValue(event:any){
    console.log("nuevo valos cambiado", event.value);
  }
    checked1 = false;
  checked2 = true;
  checked3 = true;
  checked4 = false;
  checked5 = false;
  checked6 = false;
  checked7 = true;
  checked8 = true;

  public constructor(private blockService:BlockService){}
changeGlobalPermits(){
  if(this.globalPermisos === false){
    this.disabledItems = true;
  }else{
       this.disabledItems = false;
  }
  console.log('disabledItems ahora =', this.disabledItems);
}
changeGlobalBonds(){
  if(this.globalBonificaciones ===false){
         this.disableBonds = true;
  } else {
    this.disableBonds = false;
  }
}


}
