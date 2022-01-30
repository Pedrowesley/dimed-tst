import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() itinerarios: any;
  @Input() title: string;
  @Input() description: string;
  @Output() actionClose: EventEmitter<boolean> = new EventEmitter();
  listPosition: any[];

  constructor() {
    this.title = '';
    this.description = '';
    this.itinerarios = {};
    this.listPosition = [];
  }

  ngOnInit(): void {
    this.listPosition = Object.values(this.itinerarios).map(
      (el: any, index) => {
        return el;
      }
    );
  }

  close() {
    this.actionClose.emit(false);
  }
}
