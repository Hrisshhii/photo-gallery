# React Photo Gallery

A responsive photo gallery built with **React, Vite, and Tailwind CSS**.

The app fetches photos from the Picsum API, displays them in a responsive grid, allows searching by author, and lets users mark photos as favourites with persistence using localStorage.

---

## Features

- Fetch photos from the Picsum Photos API
- Loading and error states
- Responsive grid layout
- Real-time search filtering by author
- Mark photos as favourites
- Favourites persist using localStorage
- State management using useReducer
- Custom data fetching hook

---

### Demo: https://photo-gallery-delta-wine.vercel.app/

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6)

---

## Project Structure

src
components
Gallery.jsx
PhotoCard.jsx
SearchBar.jsx
Spinner.jsx

hooks
useFetchPhotos.js

reducers
favouritesReducer.js

App.jsx
main.jsx

---

## API Used

Picsum Photos API

https://picsum.photos/v2/list?limit=30

---