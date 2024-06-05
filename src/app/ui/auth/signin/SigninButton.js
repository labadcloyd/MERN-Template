"use client";
import { signIn } from "next-auth/react";
// Components
import { Button } from "@/views/components";
// CSS
import css from "./styles.module.css";

export default function SigninButton() {
  function handleSignin() {
    signIn("google");
  }
  return (
    <Button onClick={handleSignin}>
      <div className={css.imageContainer} /> Log in or Sign up with Google
    </Button>
  );
}
