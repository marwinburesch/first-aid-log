import React, { useState } from 'react';
import styled from 'styled-components';
import newID from '../utils/newID';

const FormBox = styled.form`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 20px;
`;

const StyledError = styled.div`
  color: crimson;
  font-size: 10px;
`;

const ModalDialog = styled.div`
  width: 70%;
  height: 85%;
  z-index: 1;
  color: #000;
  background: white;
  opacity: 1;
  box-shadow: grey 0px 4px 4px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(193, 177, 170, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
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
        <ModalDialog>
          <FormBox onSubmit={handleSubmit}>
            <input
              type="date"
              name="registered"
              placeholder="Enter a date"
              value={formValues.registered}
              onChange={handleChange}
            />
            {errors.registered && <StyledError>{errors.registered}</StyledError>}
            <input
              name="nameInjured"
              placeholder="Name of injured person"
              value={formValues.nameInjured}
              onChange={handleChange}
            />
            {errors.nameInjured && <StyledError>{errors.nameInjured}</StyledError>}
            <input
              name="nameResponder"
              placeholder="Name of first responder"
              value={formValues.nameResponder}
              onChange={handleChange}
            />
            {errors.nameResponder && <StyledError>{errors.nameResponder}</StyledError>}
            <input
              name="nameWitness"
              placeholder="Name of present witness"
              value={formValues.nameWitness}
              onChange={handleChange}
            />
            {errors.nameWitness && <StyledError>{errors.nameWitness}</StyledError>}
            <textarea
              name="descr"
              placeholder="a brief description of what happened"
              value={formValues.descr}
              onChange={handleChange}
            />
            {errors.descr && <StyledError>{errors.descr}</StyledError>}
            <ButtonGroup>
              <button type="submit">submit</button>
              <button type="cancel" onClick={onClose}>
                cancel
              </button>
            </ButtonGroup>
          </FormBox>
        </ModalDialog>
      </Blur>
    </>
  );
}
