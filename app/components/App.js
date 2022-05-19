import { FrontloadProvider } from 'react-frontload';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

export default function App({ frontloadState }) {
  console.log(frontloadState.serverRender.frontloads);
  return (
    <FrontloadProvider initialState={frontloadState}>
      {renderRoutes(routes)}
    </FrontloadProvider>
  );
}
