import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${(props) => props.theme.primary};
  font-weight: ${(props) => (props.bold ? '600' : 'normal')};
`;

export default Paragraph;
