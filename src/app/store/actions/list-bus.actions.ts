import { createAction, props } from '@ngrx/store';
import { LineBusModel } from 'src/app/shared/models/line-bus.model';

enum ActionTypes {
  SetLoading = 'SetLoading',
  RemoveLoading = 'RemoveLoading',
  SetList = 'SetList',
}

export const removeLoading = createAction(ActionTypes.RemoveLoading);

export const setLoading = createAction(ActionTypes.SetLoading);

export const SetList = createAction(
  ActionTypes.SetList,
  props<{ store: LineBusModel[] }>()
);
