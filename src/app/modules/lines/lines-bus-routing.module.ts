import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBusComponent } from './pages/list/list-bus.component';

const routes: Routes = [
  {
    path: '',
    component: ListBusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineBusRoutingModule {}
