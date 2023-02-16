import React from "react";
import Main from "./Main";
import Row from "./Row";
import { requests } from "../requests";

const Home = () => {
  return (
    <div className="mb-20 ">
      <Main />
      <Row title="Toprated" fetchUrl={requests.toprated} />
      <Row title="Trending" fetchUrl={requests.trending} />
      <Row title="Horror" fetchUrl={requests.horror} />
      <Row title="Upcoming" fetchUrl={requests.upComing} />
    </div>
  );
};

export default Home;
