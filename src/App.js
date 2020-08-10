import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminPage from "./Pages/AdminPage";
import PostCreation from "./Pages/PostCreation";
import NotFoundPage from "./Pages/NotFoundPage";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/postcreation">Create Post</Link>
            </li>
            <li>
              <Link to="/notfound">Not Found</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch >
          <Route path="/notfound">
            <NotFound />
          </Route>
          <Route path="/postcreation">
            <CreatePost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <AdminPage />;
}

function CreatePost() {
  return <PostCreation />;
}

function NotFound() {
  return <NotFoundPage />;
}