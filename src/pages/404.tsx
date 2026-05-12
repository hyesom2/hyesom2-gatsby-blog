import GlobalStyle from '@components/Common/GlobalStyle';
import styled from '@emotion/styled';
import notFoundImg from '@images/404.png';
import { Link } from 'gatsby';

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundContainer = styled.div`
  position: relative;
`;

const NotFoundImage = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 800px;
  }
`;

const GoMainButton = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  font-size: 16px;
  color: var(--color-white);
  background-color: var(--color-yellow);
  padding: 10px 20px;
  border: 1px solid var(--color-yellow);
  border-radius: 24px;

  @media (min-width: 768px) {
    bottom: 15%;
  }
`;

export default function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <NotFoundContainer>
        <NotFoundImage src={notFoundImg} alt="404 Not Found" />
        <GoMainButton to="/">메인으로 돌아가기</GoMainButton>
      </NotFoundContainer>
    </NotFoundPageWrapper>
  );
}
