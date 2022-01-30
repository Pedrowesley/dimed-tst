import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/modules/lines/components/header/header.component';
import { MessageLoadingModule } from 'src/app/shared/components/message-loading/message-loading.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { FilterLineBusPipe } from 'src/app/shared/pipes/filter-line-bus/filter-line-bus.pipe';
import { LineBusRoutingModule } from './lines-bus-routing.module';
import { ListBusComponent } from './pages/list/list-bus.component';

@NgModule({
  declarations: [ListBusComponent, HeaderComponent, FilterLineBusPipe],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    MessageLoadingModule,
    LineBusRoutingModule,
    MessageLoadingModule,
  ],
})
export class LinesBusModule {}
