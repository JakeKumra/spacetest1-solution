// import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SweetList from "./SweetsList";

describe("SweetList", () => {
  it("renders a list of sweets with name and formatted price", () => {
    render(
      <SweetList
        sweets={[
          { name: "Candy", price: 1 },
          { name: "Chocolate", price: 2.5 },
        ]}
      />
    );

    expect(screen.getByText("Candy")).toBeTruthy();
    expect(screen.getByText("Chocolate")).toBeTruthy();
    expect(screen.getByText("£1.00")).toBeTruthy();
    expect(screen.getByText("£2.50")).toBeTruthy();
  });

  it("renders a message when the list is empty", () => {
    render(<SweetList sweets={[]} />);
    expect(screen.getByText("No matches! Try a different name.")).toBeTruthy();
  });

  it("uses the sweet name as the key (ensures no key warnings)", () => {
    const sweets = [
      { name: "Fudge", price: 1.5 },
      { name: "Gummy", price: 2 },
    ];
    const { container } = render(<SweetList sweets={sweets} />);

    const items = container.querySelectorAll("li");
    expect(items.length).toBe(2);
  });
});
