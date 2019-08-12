import React from 'react';
import { render } from 'react-dom';
import './assets/style.scss';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// import GalleryTest from './components/gallery';
// import styles from './app.module.scss';
import App from './components/app';

const rootEl = document.getElementById('app');

render(
  <App />,
  rootEl
);
