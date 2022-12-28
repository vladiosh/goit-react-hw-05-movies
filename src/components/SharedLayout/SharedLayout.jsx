import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Header, Page } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={null}>
        <Page>
          <Outlet />
        </Page>
      </Suspense>
    </>
  );
};

export default SharedLayout;
