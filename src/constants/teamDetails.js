import { v4 as uuid } from "uuid";
const teamDetails = [
  {
    uid: uuid(),
    memberName: "Zidane",
    memberResponsibilities: "Leadership & management",
    socialMediaHandles: [
      {
        uid: uuid(),
        name: "Linkedin",
      },
      {
        uid: uuid(),
        name: "Medium",
      },
      {
        uid: uuid(),
        name: "Facebook",
      },
    ],
    memberPic: "/assets/zidane.jpg",
  },
  {
    uid: uuid(),
    memberName: "Toni Kroos",
    memberResponsibilities: "Product Developer",
    socialMediaHandles: [
      {
        uid: uuid(),
        name: "Linkedin",
      },
      {
        uid: uuid(),
        name: "Medium",
      },
    ],
    memberPic: "/assets/tonikroos.jpg",
  },
  {
    uid: uuid(),
    memberName: "Iker Casillas",
    memberResponsibilities: "Marketing Strategy",
    socialMediaHandles: [{ uid: uuid(), name: "Medium" }],
    memberPic: "/assets/ikercasillas.jpg",
  },
  {
    uid: uuid(),
    memberName: "James",
    memberResponsibilities: "Product designer",
    socialMediaHandles: [
      { uid: uuid(), name: "Medium" },
      { uid: uuid(), name: "Dribble" },
      { uid: uuid(), name: "Behance" },
    ],
    memberPic: "/assets/james.jpg",
  },
  {
    uid: uuid(),
    memberName: "Cristiano",
    memberResponsibilities: "Financial Operations",
    socialMediaHandles: [
      { uid: uuid(), name: "Linkedin" },
      { uid: uuid(), name: "Facebook" },
    ],
    memberPic: "/assets/christiano.jpg",
  },
];

export { teamDetails };
