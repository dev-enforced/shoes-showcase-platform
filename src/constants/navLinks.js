import { v4 as uuid } from "uuid";
import { routeConstants } from "./routeConstants";
const { HOME_ROUTE, JOURNEY_ROUTE, STORE_ROUTE, TEAM_ROUTE, CONTACT_ROUTE } =
  routeConstants;
const navLinks = [
  {
    uid: uuid(),
    text: "HOME",
    path: HOME_ROUTE,
  },
  {
    uid: uuid(),
    text: "THE JOURNEY",
    path: JOURNEY_ROUTE,
  },
  {
    uid: uuid(),
    text: "TEAM",
    path: TEAM_ROUTE,
  },
  {
    uid: uuid(),
    text: "STORE",
    path: STORE_ROUTE,
  },
  {
    uid: uuid(),
    text: "CONTACT",
    path: CONTACT_ROUTE,
  },
];

export { navLinks };
