# Movie Search App

This project is a simple movie search website built using React and the OMDB API. You can search for movies, view their details, and experience smooth error handling for invalid searches or network issues.

## Features

- Search for movies using the OMDB API
- View movie details including title, year, genre, and plot
- Handles errors gracefully (e.g., invalid movie searches, API failures)
- Built with React and Vite for fast development

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- An OMDB API key (Get yours from [OMDB API](https://www.omdbapi.com/))

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/movie-search-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd movie-search-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your OMDB API key:
   ```sh
   VITE_OMDB_API_KEY=your_api_key_here
   ```

### Running the Project

To start the development server, run:
```sh
npm run dev
```
This will start the Vite development server, and you can access the app at `http://localhost:5173/`.

### Building for Production
To create an optimized production build, run:
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

## Technologies Used

- React
- Vite
- OMDB API
- CSS for basic styling

## Future Improvements

- Add pagination for search results
- Improve UI with better styling and animations
- Implement favorite movies list

## License
This project is licensed under the MIT License.

