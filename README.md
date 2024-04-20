# Diego Rivera Acosta's Portfolio

This is Diego Rivera Acosta's portfolio website showcasing his projects, skills, and background. The project is split into a backend built with Node.js and MongoDB and a frontend built with React.

## Backend

### Technologies Used
- Node.js
- MongoDB
- Express.js

### Setup
1. Install Node.js and MongoDB on your machine.
2. Clone the repository: https://github.com/diegoarivera35/PortfolioBackend
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the required packages.
5. Create a `.env` file in the root directory and add the following:
   ```
   MONGO_USERNAME=****************
   MONGO_PASSWORD=****************
   ```
6. Run `npm run dev` to start the server in development mode.

### API Endpoints
- `GET /projects`: Fetch all projects.

## Frontend

### Technologies Used
- React
- Axios for API calls
- TailwindCSS for styling

### Setup
1. Navigate to the `frontend` directory in your terminal.
2. Run `npm install` to install the required packages.
3. Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_API_URL=http://localhost:8889
   ```
4. Run `npm run dev` to start the development server.

## Features

- Display projects with details fetched from the backend.
- Responsive design.
- Integration with various APIs and databases.

## Future Improvements

- Add user authentication.
- Implement a contact form.
- Include a blog section.

## Screenshot

![MyPortfolio](screenshot.png)
