import React from 'react';

type GreetProps = {
  name?: string;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}
