import { FC, useCallback } from "react";
import Catalog from "../../components/layouts/catalog/Catalog";
import dataStore from "../../store/dataStore";
import favorites from "../../store/favoritesStore";
import { Query } from "../../graphql/generated";
import Card from "../../components/card/Card";
import { observer } from "mobx-react-lite";

const CatalogCars: FC = () => {
  const handleId = useCallback((id: number) => {
    favorites.checkId(id);
  }, []);

  const renders = useCallback(
    (data: Query["car"]) => {
      if (data) {
        return (
          <Card
            data={data}
            key={data?.id}
            favorites={favorites.idSet[data?.id]}
            addInFavorites={handleId}
          />
        );
      }
    },
    [favorites.idSet]
  );

  return <Catalog items={dataStore.getData()} renderItem={renders} />;
};

export default observer(CatalogCars);
