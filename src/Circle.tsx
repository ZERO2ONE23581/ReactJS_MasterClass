//interface is just an explaination for an object!
//in CSS borderColor is required.
//in CircleProps borderColor is optional.

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
  //??으로 디폴트값을 준다. (borderColor가 undefined일때는 bgColor와 같다.)
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
