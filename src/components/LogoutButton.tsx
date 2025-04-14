import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button 
    className="btn btn-primary logoutBtn"
    onClick={() => {
      logout({ 
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }}>Log out</button>
  );
}

export default LogoutButton;