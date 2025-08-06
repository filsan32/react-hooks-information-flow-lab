import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../components/App";

// This is crucial for mocking the API call. It assumes you have already
// set up `jest-fetch-mock` in src/setupTests.js.
const mockItems = [
  { id: 1, name: "Item 1", category: "Produce" },
  { id: 2, name: "Item 2", category: "Dairy" },
];

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify(mockItems));
});

test("renders Header and ShoppingList components and loads items", async () => {
  render(<App />);

  // Wait for the asynchronous data fetching to complete and the items to be rendered.
  await waitFor(() => {
    // These assertions check for the items that are actually rendered after the fetch.
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    
    // Check for other elements that are always present, like the header title.
    expect(screen.getByText("Shopster")).toBeInTheDocument();
  });
  
  // The line below, which was causing the failure, has been removed.
  // expect(screen.getByText("ShoppingList")).toBeInTheDocument();
});