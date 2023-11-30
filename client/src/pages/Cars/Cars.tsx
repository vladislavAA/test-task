import { FC, useCallback, useEffect, useMemo } from "react";
import carsJSON from "../../fake_cars.json";
import { Query } from "../../graphql/generated";
import Header from "../../components/layouts/header/Header";
import Tools from "../../components/layouts/tools/Tools";
import dataStore from "../../store/dataStore";
import CatalogCars from "../../containers/catalog-cars/CatalogCars";
import { observer } from "mobx-react-lite";

const Cars: FC = () => {
  const cars: Query["cars"] = carsJSON;

  useEffect(() => {
    dataStore.loadData("");
    dataStore.sorting();
  }, []);

  const callback = {
    sort: useCallback((sort: string) => {
      dataStore.sorting(sort);
    }, []),

    search: useCallback((search: string) => {
      dataStore.searchFilter(search);
    }, []),
  };

  const options = {
    sort: useMemo(
      () => [
        { value: "availability", title: "Сначала в наличии" },
        { value: "+name", title: "По имени (A-Z)" },
        { value: "-name", title: "По имени (Z-A)" },
        { value: "+year", title: "Сначала новее" },
        { value: "-year", title: "Сначала старше" },
        { value: "-price", title: "Сначала дешевле" },
        { value: "+price", title: "Сначала дороже" },
      ],
      []
    ),
  };

  return (
    <div>
      <Header />
      <Tools
        options={options.sort}
        sort={callback.sort}
        valueSelect={dataStore.getSort}
        search={callback.search}
      />
      <CatalogCars />
    </div>
  );
};

export default observer(Cars);
