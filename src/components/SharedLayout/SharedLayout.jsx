import { Outlet } from 'react-router-dom';
import { Container, Link, Header, Page } from './SharedLayout.styled';
// import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Page>
        <Outlet />
      </Page>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Container>
  );
};
