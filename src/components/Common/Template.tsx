import Footer from '@components/Common/Footer';
import GlobalStyle from '@components/Common/GlobalStyle';
import Menu from '@components/Common/Menu';
import styled from '@emotion/styled';

type TemplateProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding-top: 80px;
    margin: 0 auto;
  }
`;

export default function Template({ children }: TemplateProps) {
  return (
    <Container>
      <GlobalStyle />
      <Menu />
      {children}
      <Footer />
    </Container>
  );
}
