import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { LinesService } from 'src/app/core/services/lines/lines.service';
import { ListBusStore } from 'src/app/store/reducers/list-bus.reducer';
import { LineBusModel } from '../../../../shared/models/line-bus.model';
import { NotifiersService } from './../../../../core/services/notifiers/notifiers.service';
import {
  removeLoading,
  SetList,
  setLoading,
} from './../../../../store/actions/list-bus.actions';

interface PropsListEmitter {
  list: LineBusModel[];
  inputSearch: string;
}

@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.scss'],
})
export class ListBusComponent implements OnInit {
  itinerario: any;
  showModal: boolean;
  inputSearch: string;
  loading$: Observable<boolean>;
  list$: Observable<LineBusModel[]>;

  constructor(
    private service: LinesService,
    private notifiersService: NotifiersService,
    private store: Store<{ app: ListBusStore }>
  ) {
    this.itinerario = {};
    this.showModal = false;
    this.inputSearch = '';

    this.loading$ = this.store.select('app').pipe(map((e) => e.loading));
    this.list$ = this.store.select('app').pipe(map((e) => e.list));
  }

  ngOnInit(): void {
    this.getLists();
  }

  setInputSearch(value: string) {
    this.inputSearch = value;
  }

  getLists() {
    this.store.dispatch(setLoading());

    this.service.getListBus().subscribe({
      next: (res) => {
        this.store.dispatch(SetList({ store: res }));
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
  }

  getItinerarios(id: string) {
    this.service.getIntineario(id).subscribe({
      next: (res) => {
        this.itinerario = res;
        this.showModal = true;
      },
      error: () => {
        this.notifiersService.showNotificationDanger(
          'Erro ao trazer listagem de itinerários'
        );
      },
      complete: () => {},
    });
  }

  closeModal() {
    this.showModal = false;
  }
}
