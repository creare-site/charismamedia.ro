import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
        Proiect Turistic - <a href="mailto:hello@binistelamunte.ro">hello@binistelamunte.ro</a>
        <br />
      </p>
    </header>
  );
}
