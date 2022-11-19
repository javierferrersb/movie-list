import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCardListSkeleon from "../components/MovieCardList";

export default {
  title: "MovieCardList",
  component: MovieCardListSkeleon,
} as ComponentMeta<typeof MovieCardListSkeleon>;

const Template: ComponentStory<typeof MovieCardListSkeleon> = (args) => (
  <MovieCardListSkeleon />
);

export const Default = Template.bind({});

Default.args = {};
