import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageLoadingComponent } from './message-loading.component';

@NgModule({
  declarations: [MessageLoadingComponent],
  exports: [MessageLoadingComponent],
  imports: [CommonModule],
})
export class MessageLoadingModule {}
