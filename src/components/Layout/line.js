import React from 'react';

export default function ({line, index, greenIndex}) {
  let selected = 'normal';

  if (greenIndex === index) {
    selected = 'green';
  }
  return <li className={selected}>{line}</li>;
}
