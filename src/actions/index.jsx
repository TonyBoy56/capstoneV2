import React, { Component } from 'react';
import * as c from './ActionsTypes';
// const API = require('call-of-duty-api')();
var unirest = require("unirest");

// import axios from 'axios'
// import rateLimit from 'axios-rate-limit';

// Maybe this will work (below) //



var req = unirest("GET", "https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/assassin56--_/psn");

req.headers({
	"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
	"x-rapidapi-key": process.env.REACT_APP_COD_API_KEY,
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});



export const requestLogin = () => ({
  type: c.REQUEST_LOGIN
});

export const getLoginFailure = (error) => ({
  type: c.GET_LOGIN_FAILURE,
  error
});

export const getLoginSuccess = (profiles) => ({
  type: c.GET_LOGIN_SUCCESS,
  profiles
});

const makeApiCallLogin = async (signInEmail, signInPassword) => {
}

export default makeApiCallLogin;

