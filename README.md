# React Weather App

Get OpenWeatherMap API to use this app.

## 1. Create a file called .env

## 2. Inside the .env file, prepend REACT_APP_WEATHER_API_KEY to your API key and assign it.

// Example
REACT_APP_WEATHER_API_KEY=123456

## 3. Remember to add the .env file to your .gitignore file.

## 4. Access the API key via the process.env object inside App.js

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
