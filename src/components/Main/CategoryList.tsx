import styled from '@emotion/styled';
import { Link } from 'gatsby';

type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 50px auto 0;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export default function CategoryList({
  selectedCategory,
  categoryList,
}: CategoryListProps) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
}
