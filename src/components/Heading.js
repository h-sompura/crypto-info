import styled from "styled-components";
const Heading = styled.h1`
  font-family: ${(props) => ` ${props.theme.fonts.unbounded}, cursive`};
  color: ${(props) => props.theme.colors.primaryCyan};
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding:.5em 2em;
  letter-spacing: .05em;
  line-height:1.5em;
`;

export default Heading;
