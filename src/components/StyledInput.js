import styled from "styled-components";
const StyledInput = styled.input`
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.greyText};
  outline: 0;
  border: none;
  border-radius: 1.3em;
  padding: 0.6em 0;
  padding-left: 1.5em;
  padding-right: 5em;
  transition: ease-in-out 0.3s;
  ::placeholder {
    color: ${(props) => props.theme.colors.black};
  }
  :hover {
    border: 2px solid ${(props) => props.theme.colors.primaryCyan};
  }
  :focus {
    background-color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.primaryCyan};
  }
`;

export default StyledInput;
