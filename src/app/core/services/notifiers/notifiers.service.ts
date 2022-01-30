import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotifiersService {
  constructor(private toastr: ToastrService) {}

  showNotificationSuccess(message: string) {
    this.toastr.success(message, 'Sucesso!');
  }

  showNotificationDanger(message: string) {
    this.toastr.error(message, 'Opss...');
  }
}
