import { LineBusModel } from '../../../shared/models/line-bus.model';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class LinesService extends BaseService {

  getListBus() {
    return this._get<LineBusModel[]>('/php/facades/process.php?a=nc&p=%25&t=o');
  }

  getListStocking(){
    return this._get<LineBusModel[]>('/php/facades/process.php?a=nc&p=%25&t=l');
  }

  getIntineario(id: string){
    return this._get<LineBusModel[]>(`/php/facades/process.php?a=il&p=${id}`);
  }

}
