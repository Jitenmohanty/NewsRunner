import React, { useState } from "react";
import Navbars from "./Components/Navbars";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import FavoruiteList from "./Components/FavoruiteList";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [Progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbars />
      <LoadingBar color="#f11946" progress={Progress} />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/news"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={9}
              country="in"
              category="general"
            />
          }
        />

        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={9}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={9}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={9}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={9}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={9}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={9}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={9}
              country="in"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/favlist"
          element={
            <FavoruiteList
              key="favlist"
              apiKey={apiKey}
              pageSize={9}
              country="in"
              setProgress={setProgress}
              category="Favoruite List"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
