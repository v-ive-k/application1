# Running it in local compiler.

Here's a sample **README.md** file for your project. This will help explain what you've done and how to use your application.

---

# Funny Cursor Website

This project is a fun and interactive web application that showcases a funny cursor (orange ball) that follows your mouse movement and displays random funny messages when you click anywhere on the page. The project uses **Node.js**, **Express**, and **Particles.js** for dynamic effects and interactivity.

## Features:
- **Funny Cursor (Orange Ball)**: The cursor is an orange ball that follows your mouse movement, providing a fun and unique experience.
- **Random Funny Messages**: When you click anywhere on the page, a random funny message is fetched from the backend and displayed near the cursor.
- **Particles Background**: The background is animated with floating particles, thanks to **Particles.js**, making the site visually engaging.
- **Backend API**: A simple Node.js backend serves random messages when triggered by a user action.

## Tech Stack:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Particle Effects**: Particles.js
- **Package Manager**: npm

## Installation:

### 1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies:

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Run the Application:

To start the server, run:

```bash
npm start
```

This will start the application on `http://localhost:3000`.

### 4. Open the Application:

Navigate to `http://localhost:3000` in your browser. You should see the funny cursor following your mouse and, upon clicking anywhere, random messages will appear near the cursor.

## Directory Structure:
```
/public
    ├── index.html         # HTML structure of the page
    ├── styles.css         # Styling for the page
    └── script.js          # JavaScript for handling cursor and messages
/server.js               # Backend server logic
.gitignore               # Git ignore file to exclude node_modules
package.json             # Node.js project dependencies and scripts
README.md                # Project documentation
```

## How It Works:
- The **frontend** consists of an HTML file that includes the required styling and JavaScript functionality.
- The **cursor** (orange ball) follows the mouse pointer and is rendered as a `div` element.
- The **backend** serves random funny messages from a predefined list when the user clicks on the page.
- **Particles.js** adds a background particle effect, making the website visually interactive.

### Backend:
The backend is built with **Node.js** and **Express**. It has one route (`/api/data`) that returns a random funny message every time it's called. The frontend makes a **GET** request to this route to fetch the message whenever a user clicks on the page.

## Contributing:
Feel free to fork the repository, create a branch, and submit a pull request for any improvements or additions you'd like to make. Suggestions for further features and enhancements are welcome!

## License:
This project is open-source.
