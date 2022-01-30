import { Pipe, PipeTransform } from '@angular/core';
import { LineBusModel } from '../../models/line-bus.model';

@Pipe({
  name: 'myfilter',
})
export class FilterLineBusPipe implements PipeTransform {
  transform(items: LineBusModel[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      (item) =>
        item.nome.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
    );
  }
}
