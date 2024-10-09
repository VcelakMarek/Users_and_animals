export type Animal = {
  id: string;
  name: string;
  type: "cat" | "dog" | "other";
  age: number;
};

/** Type used for adding new Animal, API creates the id */
export type AnimalNoId = Omit<Animal, "id">;
