import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotifiersService } from 'src/app/core/services/notifiers/notifiers.service';
import {
  removeLoading,
  SetList,
  setLoading,
} from 'src/app/store/actions/list-bus.actions';
import { LinesService } from '../../../../core/services/lines/lines.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  optionsFilter: string[];
  filter: string;
  inputSearch: string;
  @Output() searchEmmiter: EventEmitter<string> = new EventEmitter();

  constructor(
    private service: LinesService,
    private store: Store,
    private notifiersService: NotifiersService
  ) {
    this.optionsFilter = ['Onibus', 'Lotação'];
    this.filter = 'Onibus';
    this.inputSearch = '';
  }

  search(text: string) {
    this.searchEmmiter.emit(text);
  }

  alterFilter() {
    this.store.dispatch(setLoading());
    if (this.filter.toLocaleLowerCase() === 'onibus') {
      this.service.getListBus().subscribe({
        next: (result) => {
          this.store.dispatch(SetList({ store: result }));
        },
        error: () => {
          this.notifiersService.showNotificationDanger(
            'Erro ao trazer listagem de ônibus'
          );
        },
        complete: () => {
          this.store.dispatch(removeLoading());
        },
      });
    } else {
      this.service.getListStocking().subscribe({
        next: (result) => {
          this.store.dispatch(SetList({ store: result }));
        },
        error: () => {
          this.notifiersService.showNotificationDanger(
            'Erro ao trazer listagem de lotações'
          );
        },
        complete: () => {
          this.store.dispatch(removeLoading());
        },
      });
    }
  }
}
