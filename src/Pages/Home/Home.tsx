import React, { useState } from "react";

// style
import {
  Container,
  CalculatorBx,
  InputField,
  Button,
  Row,
  EqualBtn,
} from "./HomeStyle";

const Home = () => {
  // variables
  const [result, setResult] = useState<any>("" as any);

  // functions
  const handleChange = (e: any) => {
    setResult(result.toString().concat(e.target.name));
  };

  const equal = () => {
    setResult(eval(result));
  };

  const removeValue = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.toString().slice(0, -1));
  };

  return (
    <Container>
      <CalculatorBx>
        <Row>
          <InputField value={result} autoFocus placeholder="0" />
        </Row>
        <Row>
          <Button name="7" onClick={(e) => handleChange(e)}>
            7
          </Button>
          <Button name="8" onClick={(e) => handleChange(e)}>
            8
          </Button>
          <Button name="9" value="9" onClick={(e) => handleChange(e)}>
            9
          </Button>
          <Button name="/" onClick={(e) => handleChange(e)}>
            /
          </Button>
        </Row>
        <Row>
          <Button name="4" onClick={(e) => handleChange(e)}>
            4
          </Button>
          <Button name="5" onClick={(e) => handleChange(e)}>
            5
          </Button>
          <Button name="6" onClick={(e) => handleChange(e)}>
            6
          </Button>
          <Button name="*" onClick={(e) => handleChange(e)}>
            x
          </Button>
        </Row>
        <Row>
          <Button name="1" onClick={(e) => handleChange(e)}>
            1
          </Button>
          <Button name="2" onClick={(e) => handleChange(e)}>
            2
          </Button>
          <Button name="3" onClick={(e) => handleChange(e)}>
            3
          </Button>
          <Button name="-" onClick={(e) => handleChange(e)}>
            -
          </Button>
        </Row>
        <Row>
          <Button name="." onClick={(e) => handleChange(e)}>
            .
          </Button>
          <Button name="0" onClick={(e) => handleChange(e)}>
            0
          </Button>
          <Button name="%" onClick={(e) => handleChange(e)}>
            %
          </Button>
          <Button name="+" onClick={(e) => handleChange(e)}>
            +
          </Button>
        </Row>
        <Row>
          <Button onClick={backSpace}>Back</Button>
          <Button onClick={removeValue}>AC</Button>
          <EqualBtn onClick={equal}>=</EqualBtn>
        </Row>
      </CalculatorBx>
    </Container>
  );
};

export default Home;
