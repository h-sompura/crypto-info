import styled from "styled-components";
const Container = styled.div`
  display: ${(props) => (props.isFlex ? "flex" : "block")};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : "transparent"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  margin: 0 2em;
`;

export default Container;
