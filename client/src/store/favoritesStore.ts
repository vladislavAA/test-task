import { makeObservable, observable, computed, action } from "mobx";
import { Query } from "../graphql/generated";
import GET_CARS_BY_ID from "../qure/getCarById";
import client from "../apollo/apolloClient";

class FavoritesStore {
  _data = [] as Query["cars"];
  _idSet: Record<string, boolean> = {};
  _count = 0;

  constructor() {
    makeObservable(
      this,
      {
        _data: observable,
        _idSet: observable,
        _count: observable,
        data: computed,
        idSet: computed,
        fetchCar: action,
        checkId: action,
      },
      { autoBind: true }
    );
  }

  get data() {
    return this._data;
  }

  set data(value: Query["cars"]) {
    this._data = value;
  }

  get idSet() {
    return this._idSet;
  }

  set idSet(value: Record<string, boolean>) {
    this._idSet = value;
  }

  async fetchCar(id: number) {
    if (this.findItem(id)) return;
    try {
      const { loading, error, data } = await client.query({
        query: GET_CARS_BY_ID,
        variables: {
          id: id,
        },
      });
      if (!loading && data) {
        this.data = [...this.data, data.car];
      }
    } catch (error) {
      console.error("Error loading data: ", error);
    }
  }

  checkId(id: number) {
    let newSet = {};
    if (id && this.idSet[id]) {
      newSet = { ...this.idSet, [id]: false };
      this.deleteIdCar(id);
    } else {
      newSet = { ...this.idSet, [id]: true };
      this.fetchCar(id);
    }
    this.idSet = newSet;
  }

  deleteIdCar(id: number) {
    const newData = [...this.data];
    const indexOfValue = this.data.findIndex((item) => id === item.id);
    if (indexOfValue !== -1) {
      newData.splice(indexOfValue, 1);
    }
    this.data = newData;
  }

  private findItem(id: number): Query["car"] {
    const date = this.data.find((date) => date.id === id);
    return date;
  }
}

export default new FavoritesStore();
