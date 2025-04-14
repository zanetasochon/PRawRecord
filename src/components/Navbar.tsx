import { useAuth0 } from '@auth0/auth0-react';
// import LogoutButton from "./LogoutButton";
// import LoginButton from "./LoginButton";

function Navbar() {
  const { loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {!isLoading && !user && (
        <button
          className="btn btn-primary btn-block"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
      {!isLoading && user && (
        <button
          className="btn btn-primary btn-block"
          onClick={() => logout()}
        >
          Log Out Out Out
        </button>
      )}
    </nav>
  );
}

export default Navbar;
