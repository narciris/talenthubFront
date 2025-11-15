import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-files',
  imports: [
    CommonModule,
    FileUploadModule,
    ToastModule

  ],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  subirArchivos(event: any) {
    const formData = new FormData();
    
    // Agregar archivos
    for (let file of event.files) {
      formData.append('files', file);
    }
    
    // Agregar datos extra si necesitas
    formData.append('usuario', 'juan');

}

}
