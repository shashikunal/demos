/* eslint-disable react/prop-types */
import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
const GlobalStyleProvider = ({ children }) => {
  return <GlobalStyles>{children}</GlobalStyles>;
};

const GlobalStyles = styled.section`
  height: 100%;
  background-color: #efefef;
`;

export default GlobalStyleProvider;
