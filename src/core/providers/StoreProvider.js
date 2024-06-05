"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../store";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
// The next step is to include the StoreProvider anywhere in the tree above where the store is used.
// You can locate the store in the layout component if all the routes using that layout need the store.
// Or if the store is only used in a specific route you can create and provide the store in that route handler.
// In all client components further down the tree, you can use the store exactly as you would normally using the hooks provided by react-redux.
