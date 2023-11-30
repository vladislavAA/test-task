import { FC, useCallback } from "react";
import CountFavorites from "../../components/layouts/count-favorites/CountFavorites";
import favoritesStore from "../../store/favoritesStore";
import { Query } from "../../graphql/generated";
import CardFavorite from "../../components/card-favorite/CardFavorite";
import List from "../../components/layouts/list/List";
import { observer } from "mobx-react-lite";
import "./CatalogFavorites.css";

const CatalogFavorites: FC = () => {
  const renders = useCallback(
    (data: Query["car"]) => <CardFavorite data={data} key={data?.id} />,
    []
  );

  return (
    <>
      <CountFavorites count={favoritesStore.data.length} />
      <List data={favoritesStore.data} renderData={renders} />
    </>
  );
};

export default observer(CatalogFavorites);
