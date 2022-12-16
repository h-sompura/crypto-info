import styled from "styled-components";
const Heading = styled.h1`
  font-family: ${(props) => ` ${props.theme.fonts.unbounded}, cursive`};
  color: ${(props) => props.theme.colors.primaryCyan};
`;

export default Heading;
