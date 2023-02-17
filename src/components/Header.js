import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
      Outdoor Advertising - <a href="mailto:contact@charismamedia.ro">contact@charismamedia.ro</a>
        <br />
      </p>
    </header>
  );
}
