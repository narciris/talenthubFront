import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private messageService = inject(MessageService)


  constructor() { }

  public success (message= '', title = 'Success'){
    this.messageService.add({
      severity: 'success',
      summary: title,
      detail: message,
      life:3000
    })
  }

    public error (message= '', title = 'Error'){
    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: message,
      life:5000
    })
  }


    public info (message= '', title = 'Info'){
    this.messageService.add({
      severity: 'info',
      summary: title,
      detail: message
    })
  }


    public warn (message= '', title = 'Warn'){
    this.messageService.add({
      severity: 'warn',
      summary: title,
      detail: message,
      life:4000
    })
  }



}
