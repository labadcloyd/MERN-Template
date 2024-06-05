// Layouts
import { Footer, Navbar } from "@/views/layouts";
// CSS
import css from "./styles.module.css";
import SigninButton from "./SigninButton";

export default function Signin() {
  return (
    <main>
      <div className={css.wrapper}>
        <p>Template Sigin</p>
        <h1>Log in or Sign up</h1>
        <SigninButton />
      </div>
    </main>
  );
}
