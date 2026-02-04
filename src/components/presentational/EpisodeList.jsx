import { EpisodeItem } from "./EpisodeItem";
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useEpisodes } from "../hooks/useEpisodes";
import { useLocations } from "../hooks/useLocations";

export const EpisodeList = ({ content }) => {
  const { episodes } = useEpisodes();
  const { locations } = useLocations();

  if (content === "locations") {
    return (
      <div>
        {locations.map((location) => (
          <Collapse
            key={location.id}
            className="episode"
            title={location.name}
            content={
              <CharacterList
                ids={location.residents.map((resident) => {
                  // if (!resident) return null;
                  const id = resident.split("/").pop();
                  return id;
                })}
              />
            }
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      {episodes.map((episode) => (
        <Collapse
          key={episode.id}
          className="episode"
          title={episode.episode + ":" + episode.name}
          content={
            <CharacterList
              ids={episode.characters.map((character) => {
                const id = character.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
};
