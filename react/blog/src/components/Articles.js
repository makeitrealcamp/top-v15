import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Articles.css';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: purple;
  padding: 5px 15px;
  background-color: #e48fe4;

  &:visited {
    color: red;
  }
`;

const StyledContainer = styled.article`
  border-radius: 15px;

  .Articles__title {
    font-size: 64px;
  }
`;

export function Articles({ posts, darkMode }) {
  return (
    posts.map(({ id, title }) => (
      <StyledContainer className={`Articles ${darkMode ? 'dark' : 'light'}`} key={id}>
        <h1 className="Articles__title">{title}</h1>
        <StyledLink className="Articles__link" to={`/posts/${id}`}>ver más</StyledLink>
      </StyledContainer>
    ))
  )
}
