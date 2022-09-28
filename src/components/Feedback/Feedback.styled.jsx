import styled from '@emotion/styled';

export const Markup = styled.div`
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.ll};
`;

export const BoxButton = styled.div``;

export const Button = styled.button`
  margin-right: ${props => props.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Statistics = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
`;

export const BoxInfo = styled.div``;

export const Info = styled.p``;

// export const Card = styled.li`
//   display: flex;
//   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
//     0px 2px 1px rgba(0, 0, 0, 0.2);
//   border-radius: 6px;
//   background-color: ${props => props.theme.colors.white};

//   margin-top: 20px;
//   padding: 20px;
//   align-items: center;

//   &:last-child {
//     margin-bottom: 50px;
//   }
// `;
