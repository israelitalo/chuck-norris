import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from ".";
import { SearchContextProvider } from "../../contexts/searchContext";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  it("renders input search", () => {
    render(
      <MemoryRouter>
        <SearchContextProvider>
          <Home />
        </SearchContextProvider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("input-search")).toBeInTheDocument();
  });

  it("renders button search", () => {
    render(
      <MemoryRouter>
        <SearchContextProvider>
          <Home />
        </SearchContextProvider>
      </MemoryRouter>
    );
    const ButtonSearch = screen.getByTestId("button-search");
    expect(ButtonSearch).toBeInTheDocument();
  });

  it("should get the event click in button and return error message to find 2 or fewer caracteres in searh input", () => {
    render(
      <MemoryRouter>
        <SearchContextProvider>
          <Home />
        </SearchContextProvider>
      </MemoryRouter>
    );

    const inputSearch = screen.getByTestId("input-search");

    fireEvent.change(inputSearch, {target: { value: 'fa' }});

    const buttonSearch = screen.getByTestId("button-search");

    fireEvent(buttonSearch, new MouseEvent('click'));

    const spanHasError = screen.getByTestId("span-error-message");

    expect(spanHasError).toBeInTheDocument();
    expect(buttonSearch).toHaveTextContent("search");
    expect(buttonSearch).not.toHaveTextContent("hold up");
  })

  it("should change text in button submit after submit form with 3 or more caracteres in search input", () => {
    render(
      <MemoryRouter>
        <SearchContextProvider>
          <Home />
        </SearchContextProvider>
      </MemoryRouter>
    );

    const inputSearch = screen.getByTestId("input-search");

    fireEvent.change(inputSearch, {target: { value: 'facebook' }});

    const buttonSearch = screen.getByTestId("button-search");

    fireEvent(buttonSearch, new MouseEvent('click'));

    expect(buttonSearch).toHaveTextContent("hold up");
    expect(buttonSearch).not.toHaveTextContent("search");
  })
});
