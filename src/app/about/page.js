'use client';

import React, { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (

    <div className="content">
      <h1>About This Application</h1>
      <p>
        hi my name is amichai and i made this app to help people learn more about web development and programming. This application provides resources, tutorials, and examples to assist users in their learning journey.
      </p>
      <button onClick={handleClick}> Click Me</button>
      <br />
      {count}
    </div>

  );
}
