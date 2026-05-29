import styled from '@emotion/styled';

interface PostCOntentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;
`;

export default function PostContent({ html }: PostCOntentProps) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
}
