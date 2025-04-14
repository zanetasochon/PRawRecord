import { useNavigate } from 'react-router-dom';
import { Auth0Provider, AppState } from '@auth0/auth0-react';

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN!;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;

  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
