# PaRA Web Application

[![Website](https://img.shields.io/website?label=Demo&style=flat-square&url=https%3A%2F%2Fjpara.netlify.app%2F)](https://jpara.netlify.app/)

The PaRA Web Application is a front-end project developed for a Computer Engineering thesis, aimed at tracking and monitoring real-time coordinates transmitted by the PaRA Coordinates Tracker device. It is built using React JS, Firebase for authentication, Bing Maps API for mapping features, and Tailwind CSS for UI design.

## Key Features

- Real-time Coordinate Tracking: The web application connects to the backend RESTful API made in PHP to fetch and display the real-time coordinates sent by the PaRA Coordinates Tracker device, facilitating seamless tracking and monitoring of the device's location.
- User Authentication: Firebase authentication is integrated into the application, ensuring secure access and user-specific functionalities.
- Interactive Map: The Bing Maps API is utilized to provide an interactive map interface, enabling users to visualize the coordinates and navigate the tracked location efficiently.
- User-Friendly UI: The application's user interface is designed using Tailwind CSS, offering a clean and intuitive layout for a seamless user experience.

## Getting Started

To set up and run the PaRA Web Application locally, follow the instructions below:

1. Clone this repository to your local machine.
2. Install the project dependencies by running `npm install` in the project directory.
3. Configure the Firebase project and obtain the necessary authentication credentials.
4. Set up the backend RESTful API using the provided PHP code or connect to your existing backend.
5. Replace the necessary API endpoints and authentication credentials in the code to establish the connection between the frontend and backend.
6. Run the development server using `npm run dev` to start the application locally.
7. Access the application in your web browser at `http://localhost:3000` and explore its features.

## Deployment

The PaRA Web Application can be deployed using the following steps:

1. Build the application for production by running `npm run build`.
2. The build output will be available in the `dist` directory.
3. Serve the build files using a static file server or deploy it to a hosting platform of your choice.
4. Update the necessary configuration (API endpoints, Firebase credentials) to reflect the deployed environment.
5. Access the deployed application through the provided URL or custom domain.

## Contributing

Contributions to the PaRA Web Application project are welcome. If you find any bugs, issues, or have suggestions for improvements, please open an issue or submit a pull request.
