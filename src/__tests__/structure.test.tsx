import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "@/app/page";
import Character from "@/app/characters/page";
import { useRouter, usePathname } from 'next/navigation';

// Add this before your describe block
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => "/"), // or return the path you want for your test
}));

describe("Rick and Morty App Integration", () => {

  test("renders navigation and footer on home page", () => {
    render(<Home />);
    expect(screen.getByAltText(/Rick and morty logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Resources/i)).toBeInTheDocument();
  });

  test("navigates to characters page", async () => {  
    render(<Home />);
    const getStartedBtn = screen.getByRole("button", { name: /Get Started/i });
    expect(getStartedBtn.closest("a")).toHaveAttribute("href", "/characters");
  });

  test("renders 14 character cards", async () => {
    render(<Character />);
    await waitFor(() => {
      expect(screen.getAllByTestId("character-card")).toHaveLength(14);
    });
  }); 

  test("filters characters by name", async () => {
    render(<Character />);
    const input = await screen.findByTestId("search-character-input");
    fireEvent.change(input, {
      target: { value: "Rick" },
    });
    // assert filtered results
  });

  test("shows error for special characters", async () => {
    render(<Character />);
    const input = await screen.findByTestId("search-character-input");
    fireEvent.change(input, {
      target: { value: "@" },
    });
    expect(screen.getByText(/Special characters are not allowed./i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/Special characters are not allowed./i)).not.toBeInTheDocument();
    }, { timeout: 4000 });
  });

  test("shows no matching characters.", async () => {
    render(<Character />);
    const input = await screen.findByTestId("search-character-input");
    fireEvent.change(input, {
      target: { value: "ZZZZZZ" },
    });
    await waitFor(() => {
    expect(screen.getByText(/No matching characters/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

});