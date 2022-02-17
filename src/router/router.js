import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import { NewBook } from "../pages/NewBook";
import { Books } from "../pages/Books";
import { Book } from "../pages/Book";

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path="/login" exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path="/signup" exact>
        <Auth />
      </GuestRoute>
      <AppRoute path="/books/:bookId">
        <Book />
      </AppRoute>
      <AppRoute path="/books">
        <Books />
      </AppRoute>
      <AppRoute path="/new-book">
        <NewBook />
      </AppRoute>
      <AppRoute exact path="/">
        <Main />
      </AppRoute>
    </Switch>
  );
}

export default AppRouter;
