import { jsx as _jsx } from "react/jsx-runtime";
import './.style/fonts.scss';
import './.style/global.scss';
import { Typography } from '@bashtex/basics/typography'; // TEMP
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
// import {
//   Academia,
//   ErrorPage,
//   Home,
//   Employment,
//   Library,
//   InstantGram,
//   Sport,
//   Allroad,
//   BrittonsFoodRC,
//   FoundingFathers,
//   Media,
//   MiamiVice,
//   Ricing,
//   ThinkFlow,
//   GentlemenWhoCafe,
//   GraphicDesign,
//   Weather,
//   Conquest,
// } from './components';
import { reportWebVitals } from '@utils/react';
// import { useEvents, useHills, useLinks, useRegions, useSport } from './api';
// const triggerSession = () => {
//   useEvents();
//   useHills();
//   // useLinks();
//   useRegions();
//   useSport();
// };
// triggerSession();
reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(HashRouter, { children: _jsx(Typography, { variant: "t1", children: "Hello World!" }) }));
//# sourceMappingURL=index.js.map