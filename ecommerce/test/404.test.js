/** @jest-environment jsdom */
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Error from "../src/pages/404/404";

test('The page 404 should appear', () => {
  render(<Error/>);
  const div = screen.getByText('404')
  expect(div).toBeInTheDocument();
 
});