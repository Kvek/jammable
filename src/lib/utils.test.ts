import { describe, expect, it } from "vitest";

import { nameExtractor } from "./utils";

describe("nameExtractor", () => {
  it("extracts and cleans the name from a standard path", () => {
    expect(nameExtractor("trending/Kratos_name.png")).toBe(
      "Kratos name".toLowerCase(),
    );
  });

  it("handles names with numbers and special characters", () => {
    expect(nameExtractor("files/Item_123_special!.png")).toBe(
      "Item 123 special!".toLowerCase(),
    );
  });

  it("removes multiple underscores", () => {
    expect(nameExtractor("icons/This_is_a_test.png")).toBe(
      "This is a test".toLowerCase(),
    );
  });

  it("works with complex file paths", () => {
    expect(nameExtractor("path/to/the/icons/Complex_Name_Test_001.png")).toBe(
      "Complex Name Test 001".toLowerCase(),
    );
  });

  it("returns empty string if the file extension is not png|jpeg|jpg", () => {
    expect(nameExtractor("trending/Kratos_name.pdf")).toBe("");
  });

  it("handles file names without underscores correctly", () => {
    expect(nameExtractor("new/PlainName.png")).toBe("PlainName".toLowerCase());
  });
});
