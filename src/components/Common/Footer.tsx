import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 20px;
  border-top: 1px solid #c0c0c0;

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 24px 0;
  }
`;

const GithubLink = styled.a`
  color: inherit;
  text-decoration: underline;
  margin-left: 4px;

  &:hover {
    font-weight: bold;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      &copy; 2026 Powered by
      <GithubLink
        href="https://github.com/hyesom2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="김현주 Github 새 탭에서 열림"
      >
        KimHyeonJu
      </GithubLink>
    </FooterWrapper>
  );
}
