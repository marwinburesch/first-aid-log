import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from '../components/ModalDialog';
import newID from '../utils/newID';
import { Dropdown } from '../components/Dropdown';

const FormBox = styled.form`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 90%;
  border: solid 1px #54b6d2;
  border-radius: 10px;
  box-shadow: 0px 2px #54b6d2;
  font-size: 14px;
  padding: 10px;
  margin-top: 30px;
  align-self: center;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 130px;
  margin-top: 30px;
  border: solid 1px #54b6d2;
  border-radius: 10px;
  box-shadow: 0px 2px #54b6d2;
  font-size: 14px;
  resize: none;
  padding: 10px;
  align-self: center;
  &:focus {
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  font-size: 14px;
  border: solid 2px #54b6d2;
  box-shadow: 0px 2px #54b6d2;
  background: transparent;
  margin: 5px;
  transition: all 0.1s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(0.95);
  }
`;

const StyledError = styled.div`
  color: crimson;
  font-size: 10px;
  margin: 5px 0px -17px 10px;
`;

export function FileReport({ onSubmitReport, onClose, kits }) {
  const [formValues, SetFormValues] = useState({
    _id: '',
    date: '',
    name: '',
    nameWitness: '',
    nameResponder: '',
    descr: '',
    type: ''
  });

  const [amounts, setAmounts] = useState({});
  const [selectedKit, setSelectedKit] = useState(null);
  console.log(amounts);

  function handleAmountChange(id, value, selectedKit) {
    setAmounts({ ...amounts, [id]: parseInt(value) });
    setSelectedKit(selectedKit);
  }

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    SetFormValues({
      ...formValues,
      [name]: value
    });
  }

  function validate() {
    const errors = {};

    if (formValues.date.trim() === '') {
      errors.date = 'Please enter a valid date';
    }

    if (formValues.name.trim() === '') {
      errors.name = 'Please enter the name of the injured person';
    }

    if (formValues.nameWitness.trim() === '') {
      errors.nameWitness = 'Please enter the name of a witness';
    }

    if (formValues.nameResponder.trim() === '') {
      errors.nameResponder = 'Please enter the name of the first responder';
    }

    if (formValues.descr.trim() === '') {
      errors.descr = 'Please briefly describe the injury';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    const report = {
      _id: newID(formValues.date),
      date: formValues.date,
      name: formValues.name,
      nameWitness: formValues.nameWitness,
      nameResponder: formValues.nameResponder,
      descr: formValues.descr,
      type: 'report'
    };
    console.log('submitting:', report);

    onSubmitReport(report, amounts, selectedKit);
  }

  return (
    <>
      <Dialog onClose={onClose}>
        <FormBox onSubmit={handleSubmit}>
          <Input
            type="date"
            name="date"
            placeholder="Enter a date"
            value={formValues.date}
            onChange={handleChange}
          />
          {errors.date && <StyledError>{errors.date}</StyledError>}

          <Input
            name="name"
            placeholder="Name of injured person"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <StyledError>{errors.name}</StyledError>}

          <Input
            name="nameResponder"
            placeholder="Name of first responder"
            value={formValues.nameResponder}
            onChange={handleChange}
          />
          {errors.nameResponder && <StyledError>{errors.nameResponder}</StyledError>}

          <Input
            name="nameWitness"
            placeholder="Name of present witness"
            value={formValues.nameWitness}
            onChange={handleChange}
          />
          {errors.nameWitness && <StyledError>{errors.nameWitness}</StyledError>}

          <TextArea
            name="descr"
            placeholder="a brief description of what happened"
            value={formValues.descr}
            onChange={handleChange}
          />
          {errors.descr && <StyledError>{errors.descr}</StyledError>}

          <Dropdown kits={kits} amounts={amounts} onAmountChange={handleAmountChange} />

          <ButtonGroup>
            <Button type="submit">submit</Button>
            <Button type="cancel" onClick={onClose}>
              cancel
            </Button>
          </ButtonGroup>
        </FormBox>
      </Dialog>
    </>
  );
}
