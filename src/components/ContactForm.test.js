import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without errors", () => {
  render(<ContactForm />);
});

test("user can type in text fields", async () => {
  render(<ContactForm />);

  const firstNameInput = await screen.findByLabelText(/first name*/i);
  const lastNameInput = await screen.findByLabelText(/last name*/i);
  const emailInput = await screen.findByLabelText(/email*/i);
  const messageInput = await screen.findByLabelText(/message/i);

  fireEvent.change(firstNameInput, {
    target: { value: "split", name: "firstName" },
  });
  fireEvent.change(lastNameInput, {
    target: { value: "bandit", name: "lastName" },
  });
  fireEvent.change(emailInput, {
    target: { value: "splitbandit@gmail.com", name: "email" },
  });
  fireEvent.change(messageInput, {
    target: { value: "Hello World", name: "message" },
  });

  expect(firstNameInput).toBeTruthy();
  expect(lastNameInput).toBeTruthy();
  expect(emailInput).toBeTruthy();
  expect(messageInput).toBeTruthy();
});

test("user can submit form", async () => {
  render(<ContactForm />);

  const button = await screen.findByRole(/button/i);

  fireEvent.click(button);
});

test("placeholders are correct", async () => {
  render(<ContactForm />);

  const firstNamePlaceholder = await screen.findByPlaceholderText("Edd");
  const lastNamePlaceholder = await screen.findByPlaceholderText("Burke");
  const emailPlaceholder = await screen.findByPlaceholderText(
    "bluebill1049@hotmail.com"
  );
});
