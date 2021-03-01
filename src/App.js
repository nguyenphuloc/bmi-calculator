import styled from 'styled-components';
import React , {useState} from 'react';

const BMI = styled.div`
  width: 1000px;
  height: 500px;
  margin-top: 200px;
  margin-left: 500px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  background-color: #6699ff;
`;
const H1 = styled.h1`
  font-size: 50px;
  color: white;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Weight = styled.div`
  width: 50%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;
const Height = styled.div`
  width: 50%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;
const InputWeight = styled.input`
  width: 300px;
  height:30px;
  margin-top: 10px;
  border-radius:20px;
  border: none;
`;
const InputHeight = styled.input`
  width: 300px;
  height:30px;
  margin-top: 10px;
  border-radius:20px;
  border: none;
`;
const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  #7070db;
`;
const Result = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 400px;
  margin-top: 50px;
  font-size: 30px;
`;
const Output = styled.div`
  margin-left: 10px;
`;
function App() {
  const [output, setOutput] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const onWeightChange = (event) => {
    setWeight(event.target.value);
  }

  const onHeightChange = (event) =>{
    setHeight(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const handleOnClick = () => {
    const val = ([weight / height / height] * 10000).toFixed(1);
    setOutput(val);
  }
  return (
    <BMI>
      <H1>BMI Tracker</H1>
      <Form onSubmit={onSubmit}>
        <Container>
          <Weight>
            <div>Weight (in kg)</div>
            <InputWeight onChange={onWeightChange}/>
          </Weight>
          <Height>
            <div>Height (in cm)</div>
            <InputHeight onChange={onHeightChange}/>
          </Height>
        </Container>
        <Button onClick={handleOnClick}>Calculator BMI</Button>
        <Result>
          <div>Result:</div>
          <Output>{output}</Output>
        </Result>
      </Form>
    </BMI>
  );
}

export default App;
