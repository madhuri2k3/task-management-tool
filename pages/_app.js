import '../styles/globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.module.css';
import '../styles/Sidebar.module.css';
import '../styles/Home.module.css';
import '../styles/Tasks.module.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}


export default MyApp;














