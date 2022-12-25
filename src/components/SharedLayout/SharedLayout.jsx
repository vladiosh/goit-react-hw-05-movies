import { Outlet } from 'react-router-dom';
import { Container, Link, Header } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </Container>
  );
};
