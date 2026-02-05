import { useLocations } from "../hooks/useLocations";
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";

export const LocationsList = () => {
  const { locations } = useLocations();

  return (
    <div>
      {locations.map((location) => {
        const ids = location.residents
          .map((resident) => resident.split("/").pop())
          .filter(Boolean);

        const content =
          ids.length === 0 ? (
            <div className="empty">У этой локации нет жителей</div>
          ) : (
            <CharacterList ids={ids} />
          );

        return (
          <Collapse
            key={location.id}
            className="episode"
            title={location.name}
            content={content}
          />
        );
      })}
    </div>
  );
};
