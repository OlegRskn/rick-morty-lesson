import { LocationsList } from "./LocationsList";
import { EpisodesList } from "./EpisodesList";
import "../Rick.css";

export const List = () => {
  return (
    <div className="list">
      <span className="list-title">Locations</span>
      <LocationsList />
      <span className="list-title">Episodes</span>
      <EpisodesList />;
    </div>
  );
};
