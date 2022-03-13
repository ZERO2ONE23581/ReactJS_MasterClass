//interface is just an explaination for an object!
//in CSS borderColor is required.
//in CircleProps borderColor is optional.

import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string; //required
  borderColor: string; //required
}

const Container = styled.div<ContainerProps>`
  margin: 5px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string; //required
  borderColor?: string; //optional
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text!" }: CircleProps) {
  const [value, setValue] = useState<number | string>(1); //value can be either number of string
  // setValue(1);
  // setValue("hello");
  // setValue(true);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
