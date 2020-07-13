import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
   list: any;
}

export function createInitialState(): SessionState {
  return {
    list: new Array(),
  };
}

@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }



}