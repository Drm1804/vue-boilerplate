import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class MessagesStoreModule extends VuexModule {
  private _error: string | null = null;

  get error(){
    return this._error;
  }

  @Mutation
  setError(err: string) {
    this._error = err;
  }
  @Mutation
  clearError() {
    this._error = null;
  }
}