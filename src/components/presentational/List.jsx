import { LocationsList } from "./LocationsList";
import { EpisodesList } from "./EpisodesList";
import "../Rick.css";

export const List = () => {
  return (
    <div className="list">
      <h1 className="list-title">Locations</h1>
      <LocationsList />
      <h1 className="list-title">Episodes</h1>
      <EpisodesList />;
    </div>
  );
};
