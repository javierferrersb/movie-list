import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCard from "../components/MovieCard";

export default {
  title: "MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Titanic",
  id: "tt0120338",
  poster_path:
    "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  year: "1997",
};
