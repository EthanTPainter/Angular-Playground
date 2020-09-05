import { it } from "mocha";
import { getGretting } from "../support/app.po";

describe("angular playground", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGretting().contains("Welcome to the Angular Playground!");
  });
});
