/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Carrinho from "../src/pages/Carrinho/Carrinho";

test('renders a button element', () => {
  render(
  <BrowserRouter>
    <Carrinho carrinho={[]}/>
  </BrowserRouter>);
});