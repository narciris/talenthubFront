import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BonosService } from '../../services/bonos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardModule,ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  bonos: any[] = [];

  public constructor(private bonosService:BonosService){}
  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.bonosService.getBonos().subscribe({
       next: (response) => {
         if(response.status === "success"){
          this.bonos = response.data
         }
       }
    })
  }

}
