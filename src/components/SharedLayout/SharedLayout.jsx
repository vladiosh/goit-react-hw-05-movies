import { Outlet } from 'react-router-dom';
import { Link, Header, Page, Nav } from './SharedLayout.styled';
// import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Page>
        <Outlet />
      </Page>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
