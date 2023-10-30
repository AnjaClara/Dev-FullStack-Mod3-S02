/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import MainPage from "../src/pages/MainPage";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

test('renders a button element', () => {
  render(
  <BrowserRouter>
    <MainPage/>
  </BrowserRouter>);
 
});