# DnD Spellbook

This is a React-based application that allows users to browse and save their favorite spells from the Dungeons & Dragons 5th Edition API. The application is built with modern web technologies including TypeScript, Vite, Styled Components, and React Query.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [ESLint and Prettier Configuration](#eslint-and-prettier-configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abhishekram404/dnd-spellbook.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd dnd-spellbook
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can access the application in your browser at `http://localhost:5173`.

## Project Structure

Here's a brief overview of the project's directory structure:

```plaintext
dnd-spellbook/
│
├── public/              # Static files
├── src/                 # Source files
│   ├── assets/          # Static assets
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom hooks
│   ├── services/        # API services
│   ├── App.tsx          # Main app component
│   └── index.tsx        # Entry point
│
├── .eslintrc.cjs         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## Features

- **Spell Listing**: Browse through a list of spells.
- **Spell Details**: View detailed information about each spell.
- **Spell Search**: Search spells by name.
- **Favorites**: Save your favorite spells for quick access.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Vite**: Next-generation front-end tooling.
- **Styled Components**: CSS-in-JS for styling React components.
- **React Query**: Data-fetching and state management for React.
- **React Router**: Declarative routing for React applications.
- **ESLint**: Tool for identifying and reporting on patterns in JavaScript.
- **Prettier**: Code formatter.

## Scripts

Here are the scripts defined in the `package.json` file:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the built application.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run lint:fix`**: Fixes linting issues automatically.
- **`npm run format`**: Formats the codebase using Prettier.
- **`npm run format:check`**: Checks code formatting with Prettier.

## ESLint and Prettier Configuration

- **ESLint**: The project uses ESLint for linting, with a configuration based on Airbnb's style guide and additional rules for TypeScript and React.

- **Prettier**: Code formatting is managed by Prettier, ensuring consistent code style across the project.

To manually lint your code, use:

```bash
npm run lint
```

To automatically fix linting issues, use:

```bash
npm run lint:fix
```

To format your code, use:

```bash
npm run format
```

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

Please ensure your code follows the project's coding guidelines and is properly formatted.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to replace placeholder text (like the GitHub repository URL) with actual details specific to your project. This `README.md` should provide a comprehensive guide for users and contributors, covering installation, usage, project structure, and more. If you need more sections or have specific requirements, let me know!
