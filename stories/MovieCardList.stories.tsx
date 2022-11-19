import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCardList from "../components/MovieCardList";

export default {
  title: "MovieCardList",
  component: MovieCardList,
} as ComponentMeta<typeof MovieCardList>;

const Template: ComponentStory<typeof MovieCardList> = (args) => (
  <MovieCardList />
);

export const Default = Template.bind({});

Default.args = {};
