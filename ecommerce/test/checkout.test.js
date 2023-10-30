/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Checkout from "../src/pages/Checkout/Checkout";

test('renders a button element', () => {
  render(
  <BrowserRouter>
    <Checkout carrinho={[]}/>
  </BrowserRouter>);
});