export type Gender = "female" | "male" | "other";

export type User = {
  id: string;
  name: string;
  gender: Gender;
  banned: boolean;
};

/** Type used for adding new user, API creates the id */
export type UserNoId = Omit<User, "id">;
