import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import {Formio} from 'formiojs';
const Webform = Formio.Webform;
const WebformBuilder = Formio.WebformBuilder;
const Wizard = Formio.Wizard;
const WizardBuilder = Formio.WizardBuilder;

export {
  Webform,
  WebformBuilder,
  Wizard,
  WizardBuilder,
};

export * from './components';
export * from './constants';
export * from './modules';
export * from './types';
export * from './utils';
export {Components, Formio, Utils, Templates} from 'formiojs';
registerServiceWorker();
