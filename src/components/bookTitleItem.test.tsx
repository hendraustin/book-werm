import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";

import BookTitleItem from "./bookTitleItem";
import { removeMetadata, incrementQuantity, decrementQuantity } from "../features/book/bookSlice";

const mockStore = configureStore([]);

test("BookTitleItem component test", () => {
  const initialState = {
    book: [{ author: "Test Author A", title: "Test Title A", quantity: 2 }],
  };

  const store = mockStore(initialState);

  const { getByTitle } = render(
    <Provider store={store}>
      <BookTitleItem bookTitle="Test Title A" />
    </Provider>
  );

  const trashIcon = getByTitle("fa-trash");
  const minusIcon = getByTitle("decrementer");
  const plusIcon = getByTitle("incrementer");

  fireEvent.click(trashIcon);
  fireEvent.click(minusIcon);
  fireEvent.click(plusIcon);

  const actions = store.getActions();
  expect(actions).toEqual([
    removeMetadata("Test Title A"),
    decrementQuantity("Test Title A"),
    incrementQuantity("Test Title A"),
  ]);
});
