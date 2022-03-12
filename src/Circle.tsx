//interface is just an explaination for an object!

import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}

function Circle(props: CircleProps) {
  return <Container bgColor={props.bgColor}></Container>;
}

export default Circle;
