import { Helmet } from 'react-helmet';
import { NavLink, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { ErrorBoundary } from '../../components';
import { routes } from '../../routes';
import helmet from '../../static/helmet';
import styles from './Root.module';

export function Root({ route }) {
  return (
    <>
      <Helmet {...helmet} />
      {/* <header>
        <nav className={styles.menu}>
          <ul>
            {routes.map(
              (route, index) =>
                route.menu && (
                  <li key={index}>
                    <NavLink
                      to={route.path}
                      exact={route.exact === true}
                      activeClassName={styles.active}
                    >
                      {route.menu}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </nav>
      </header> */}
      <>
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </>
    </>
  );
}

export default withRouter(Root);
