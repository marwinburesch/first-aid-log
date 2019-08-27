import styled from 'styled-components';
import React from 'react';

const ItemBox = styled.div``;

function getIconType(type) {
  if (type === 'antiseptic') {
    return <PlusSVG />;
  }
  if (type === 'bandage') {
    return <PhoneSVG />;
  }
  if (type === 'gauzepad') {
    return <SearchSVG />;
  }
  if (type === 'plaster') {
    return <CloseSVG />;
  }
}

function Item({ item, type }) {
  return (
    <ItemBox>
      <ItemIcon>{getIconType(type)} </ItemIcon>
      <div>{item.name}</div>
      <div>{item.size}</div>
    </ItemBox>
  );
}
