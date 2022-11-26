import { v4 as uuid } from "uuid";

const contactDetails = [
  {
    uid: uuid(),
    emailAddress: "support@kicksup.com",
    designator: "for any technical support",
  },
  {
    uid: uuid(),
    emailAddress: "info@kicksup.com",
    designator: "for more information",
  },
  {
    uid: uuid(),
    emailAddress: "feedback@kicksup.com",
    designator: "to send your feedback",
  },
  {
    uid: uuid(),
    emailAddress: "jobs@kicksup.com",
    designator: "to work with us",
  },
];

export { contactDetails };
