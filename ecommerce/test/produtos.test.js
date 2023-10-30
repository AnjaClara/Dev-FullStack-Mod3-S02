/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Produtos from "../src/pages/Produtos/Produtos";
import '@testing-library/jest-dom';

test('renders a button element', () => {
  render(
  <BrowserRouter>
    <Produtos carrinho={[]}/>
  </BrowserRouter>);
  const produtos = screen.queryAllByTestId('produtos')
  expect(produtos).toHaveLength(9)
});