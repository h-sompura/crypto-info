import styled from "styled-components";
const Heading = styled.h1`
  font-family: ${(props) => ` ${props.theme.fonts.unbounded}, cursive`};
  color: ${(props) => props.theme.colors.primaryCyan};
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 0.5em 0;
  letter-spacing: 0.05em;
  line-height: 1.5em;
`;

export default Heading;
