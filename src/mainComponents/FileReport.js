import React, { useState } from 'react';
import styled from 'styled-components';
import newID from '../utils/newID';
import { ModalDialogCanvas, Blur } from '../components/ModalDialog';

const FormBox = styled.form`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 60%;
  border: solid 2px #96d2e3;
  border-radius: 10px;
  box-shadow: 0px 2px #96d2e3;
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  margin-top: 10px;
  border: solid 2px #96d2e3;
  border-radius: 10px;
  box-shadow: 0px 2px #96d2e3;
  width: 95%;
  font-size: 14px;
  align-self: center;
  resize: none;
  height: 300px;
  padding: 10px;
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
  border: solid 2px #96d2e3;
  box-shadow: 0px 2px #96d2e3;
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
`;

export function FileReport({ onSubmitReport, onClose }) {
  const [formValues, SetFormValues] = useState({
    _id: '',
    registered: '',
    nameInjured: '',
    nameWitness: '',
    nameResponder: '',
    descr: ''
  });

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

    if (formValues.registered.trim() === '') {
      errors.registered = 'Please enter a valid date';
    }

    if (formValues.nameInjured.trim() === '') {
      errors.nameInjured = 'Please enter the name of the injured person';
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
      _id: newID(formValues.registered),
      registered: formValues.registered,
      nameInjured: formValues.nameInjured,
      nameWitness: formValues.nameWitness,
      nameResponder: formValues.nameResponder,
      descr: formValues.descr
    };

    onSubmitReport(report);
  }

  return (
    <>
      <Blur>
        <ModalDialogCanvas>
          <FormBox onSubmit={handleSubmit}>
            <Input
              type="date"
              name="registered"
              placeholder="Enter a date"
              value={formValues.registered}
              onChange={handleChange}
            />
            {errors.registered && <StyledError>{errors.registered}</StyledError>}
            <Input
              name="nameInjured"
              placeholder="Name of injured person"
              value={formValues.nameInjured}
              onChange={handleChange}
            />
            {errors.nameInjured && <StyledError>{errors.nameInjured}</StyledError>}
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
            <ButtonGroup>
              <Button type="submit">submit</Button>
              <Button type="cancel" onClick={onClose}>
                cancel
              </Button>
            </ButtonGroup>
          </FormBox>
        </ModalDialogCanvas>
      </Blur>
    </>
  );
}
