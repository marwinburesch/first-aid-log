import React, { useState } from 'react';
import styled from 'styled-components';
import { Inventory, InvItem } from '../components/list/KitLayout';

const Select = styled.select`
  width: 150px;
  margin-top: 30px;
`;

const Amount = styled.input`
  width: 35px;
  border: solid 1px #c1b1aa;
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

// {
//   "_idItem": "EF9012",
//   "name": "Antiseptic",
//   "type": "regular",
//   "itemLastUsed": "2016-07-13",
//   "itemBBF": "2025-06-05",
//   "size": "200ml",
//   "amount": 1
// },
