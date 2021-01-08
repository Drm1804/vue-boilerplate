import firebase from 'firebase/app';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';


@Module
export default class UserStoreModule extends VuexModule {
  private _userData = {};

  get userData() {
    return this._userData;
  }

  @Mutation
  setUserData(data: any) {
    this._userData = data;
  }
  @Mutation
  clearUserData() {
    this._userData = {}
  }

  @Action
  async login({ email, password }: FormFields) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      this.context.commit('setError', e);
      throw e;
    }
  }

  @Action
  async registration({ email, password, name }: FormFields) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const uid = await this.context.dispatch('getUid');
      await firebase
        .database()
        .ref(`/users/${uid}/info`)
        .set({
          name,
        });
    } catch (e) {
      this.context.commit('setError', e);
      throw e;
    }
  }

  @Action
  async fetchUserData() {
    try {
      const uid = await this.context.dispatch('getUid');
      const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
      this.context.commit('setUserData', info)
    } catch (e) {
      this.context.commit('setError', e);
    }
  }

  @Action
  getUid() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  }

  @Action
  async logout() {
    await firebase.auth().signOut();
    this.context.commit('clearUserData');
  }
}

interface FormFields {
  [key: string]: string
}