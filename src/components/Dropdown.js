import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 150px;
  margin-top: 30px;
  margin-left: 5%;
  align-self: center;
`;

const Amount = styled.input`
  width: 35px;
  border: solid 1px #c1b1aa;
`;

const Inventory = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, auto));
  grid-gap: 10px;
  align-self: center;
`;

const InvItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px #c1b1aa;
  border-radius: 10px;
`;

export function Dropdown({ kits, onAmountChange, amounts }) {
  const [selection, setSelection] = useState();
  const selectedKit = kits.find(kit => kit.name === selection);

  function handleSelect(event) {
    setSelection(event.target.value);
  }

  function handleChange(event, selectedKit) {
    const { id, value } = event.target;
    onAmountChange(id, value, selectedKit);
  }

  return (
    <>
      <Select onChange={handleSelect}>
        <option key="select" value="">
          select kit
        </option>
        {kits.map(item => (
          <option key={item._id} value={item.name}>
            {item.name}
          </option>
        ))}
      </Select>
      {selectedKit && (
        <Inventory>
          {selectedKit.inventory.map(item => {
            return (
              <InvItem key={item._idItem + 'inv'}>
                <div>{item.name}</div> <div>{item.size}</div>
                <Amount
                  id={item._idItem}
                  type="number"
                  min="0"
                  max={item.amount}
                  value={amounts._idItem}
                  onChange={event => handleChange(event, selectedKit)}
                />
              </InvItem>
            );
          })}
        </Inventory>
      )}
    </>
  );
}
