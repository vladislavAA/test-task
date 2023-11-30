import { makeAutoObservable, runInAction, toJS } from "mobx";
import { Query } from "../graphql/generated";
import GetData from "../qure/getCars";
import client from "../apollo/apolloClient";

class DataStore {
  data = [] as Query["cars"];
  sort = "availability";
  constructor() {
    makeAutoObservable(this);
  }

  async loadData(searchValue: string) {
    try {
      const { loading, error, data } = await client.query({
        query: GetData,
        variables: {
          search: searchValue,
        },
      });
      if (!loading && data) {
        runInAction(() => {
          this.data = data.cars;
        });
      }
    } catch (error) {
      console.error("Error loading data: ", error);
    }
  }

  getData(): Query["cars"] {
    return toJS(this.data);
  }

  get getSort() {
    return this.sort;
  }

  sorting(sortParameter: string = this.sort) {
    this.sort = sortParameter;
    switch (sortParameter) {
      case "availability":
        this.sortAvailability();
        break;

      case "+name":
        this.sortNameAZ();
        break;

      case "-name":
        this.sortNameZA();
        break;

      case "+year":
        this.sortYearIncrease();
        break;

      case "-year":
        this.sortYearDescending();
        break;

      case "+price":
        this.sortPriceIncrease();
        break;

      case "-price":
        this.sortPriceDescending();
        break;
    }
  }

  sortAvailability() {
    this.data = this.data.sort((a, b) => +b.availability - +a.availability);
  }

  sortNameAZ() {
    this.data = this.data.sort((a, b) => a?.brand.localeCompare(b?.brand));
  }

  sortNameZA() {
    this.data = this.data.sort((a, b) => b?.brand.localeCompare(a?.brand));
  }

  sortYearIncrease() {
    this.data = this.data.sort(
      (a, b) => Number(b.model_year) - Number(a.model_year)
    );
  }

  sortYearDescending() {
    this.data = this.data.sort(
      (a, b) => Number(a.model_year) - Number(b.model_year)
    );
  }

  sortPriceIncrease() {
    this.data = this.data.sort(
      (a, b) => Number(b.price.slice(1)) - Number(a.price.slice(1))
    );
  }

  sortPriceDescending() {
    this.data = this.data.sort(
      (a, b) => Number(a.price.slice(1)) - Number(b.price.slice(1))
    );
  }

  async searchFilter(searchValue: string) {
    try {
      const { loading, error, data } = await client.query({
        query: GetData,
        variables: {
          search: searchValue,
        },
      });
      if (!loading && data) {
        runInAction(() => {
          this.data = data.cars;
          this.sorting();
        });
      }
    } catch (error) {
      console.error("Error loading data: ", error);
    }
  }
}

export default new DataStore();
