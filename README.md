# Phaser Game with Yarn

A simple Phaser 3 game using Yarn and Webpack.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v14+ recommended)
- [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
yarn install
```

### Development

To start the development server:

```bash
yarn start
```

This will start a development server at `http://localhost:8080` with hot reloading enabled.

### Building for Production

To build the game for production:

```bash
yarn build
```

This will create optimized files in the `dist` directory.

## Game Controls

- **Left/Right Arrow Keys**: Move the character
- **Up Arrow Key**: Jump

## Game Objective

Collect all the stars to increase your score. Be careful of the bombs that appear after collecting all stars!

## Project Structure

```
phaser-game/
├── src/
│   ├── assets/       # Game assets (images, audio, etc.)
│   ├── scenes/       # Phaser scene files
│   ├── index.html    # HTML template
│   └── index.js      # Main entry point
├── package.json
├── webpack.config.js
└── README.md
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Phaser](https://phaser.io/) - HTML5 game framework
- Phaser tutorial assets