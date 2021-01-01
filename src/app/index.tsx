import React, { Suspense } from "react";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}
