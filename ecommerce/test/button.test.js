/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Button from "../src/components/Button";
import '@testing-library/jest-dom';

test('renders a button element', () => {
  render(
  <BrowserRouter>
    <Button/>
  </BrowserRouter>);
 
});