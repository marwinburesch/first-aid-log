import React from 'react';
import styled from 'styled-components';
import Sublabel from '../Sublable';

const Row = styled.div`
  width: fit-content;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Inventory = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, auto));
  grid-gap: 10px;
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

const Descr = styled.p`
  width: 100%;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export function KitLayout({ kit }) {
  return (
    <>
      <Row>
        {kit._id}
        <Sublabel text="ID" />
      </Row>
      <Row>
        {kit.date}
        <Sublabel text="Last Used" />
      </Row>
      <Row>
        {kit.name}
        <Sublabel text="Location" />
      </Row>
      <Inventory>
        {kit.inventory.map(item => {
          return (
            <InvItem key={item._idItem}>
              <div>{item.name}</div> <div>{item.itemLastUsed}</div> <div>{item.size}</div>
              <div>{item.amount}</div>
            </InvItem>
          );
        })}
      </Inventory>
      <Descr>{kit.notes}</Descr>
    </>
  );
}
