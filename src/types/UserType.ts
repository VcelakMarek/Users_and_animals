export type User = {
  id: string;
  name: string;
  gender: "female" | "male" | "other";
  banned: boolean;
};

/** Type used for adding new user, API creates the id */
export type UserNoId = Omit<User, "id">;
