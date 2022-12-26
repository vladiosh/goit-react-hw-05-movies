import { Outlet } from 'react-router-dom';
import { Link, Header, Page } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Page>
        <Outlet />
      </Page>
    </>
  );
};
