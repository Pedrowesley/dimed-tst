import { createReducer, on } from '@ngrx/store';
import { LineBusModel } from 'src/app/shared/models/line-bus.model';
import {
  removeLoading,
  SetList,
  setLoading,
} from '../actions/list-bus.actions';

export interface ListBusStore {
  loading: boolean;
  list: LineBusModel[];
}

const INITIAL_STATE = {} as ListBusStore;

export const reducer = createReducer(
  INITIAL_STATE,
  on(setLoading, (state) => ({
    ...state,
    loading: true,
  })),
  on(removeLoading, (state) => ({
    ...state,
    loading: false,
  })),
  on(SetList, (state, action) => ({
    ...state,
    list: action.store,
  }))
);
