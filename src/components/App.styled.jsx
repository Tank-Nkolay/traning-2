import styled from '@emotion/styled';

export const Markup = styled.div`
  width: 500px;
  padding: ${props => props.theme.space[5]};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.space[3]};
`;

export const MainTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.ll};
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.ll};
  margin-bottom: ${props => props.theme.space[3]};
`;
