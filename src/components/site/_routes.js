import React from 'react';
import Home from './Home';
import Games from './Games';
import Team from './Team';
import About from './About';
import Contact from './Contact';
export const routes = [
    {
      path: '/home',
      exact: true,
      main: () => <Home />
    },
    {
      path: '/games',
      exact: true,
      main: () => <Games />
  },
  {
      path: '/team',
      exact: true,
      main: () => <Team />
  },
  {
    path: '/about',
    exact: true,
    main: () => <About />
},
{
    path: '/contact',
    exact: true,
    main: () => <Contact />
},
]