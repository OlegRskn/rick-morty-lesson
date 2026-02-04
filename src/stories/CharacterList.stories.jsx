import { CharacterList } from "../components/presentational/CharacterList";

export default {
  title: "CharacterList",
  component: CharacterList,
  // render: (args) => <CharacterItem {...args} />,
};

export const Default = {
  args: {
    ids: [1, 2, 3, 4, 5],
  },
};
