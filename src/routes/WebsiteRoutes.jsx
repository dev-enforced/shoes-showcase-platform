import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConstants } from "constants";
import { Contact } from "pages";

const WebsiteRoutes = () => {
  const { HOME_ROUTE, JOURNEY_ROUTE, STORE_ROUTE, TEAM_ROUTE, CONTACT_ROUTE } =
    routeConstants;
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<></>} />
      <Route path={JOURNEY_ROUTE} element={<></>} />
      <Route path={STORE_ROUTE} element={<></>} />
      <Route path={TEAM_ROUTE} element={<></>} />
      <Route path={CONTACT_ROUTE} element={<Contact />} />
    </Routes>
  );
};
export { WebsiteRoutes };
