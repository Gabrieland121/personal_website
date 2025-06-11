# Personal Portfolio Website

A modern, interactive personal portfolio website built with React, featuring algorithm visualizations and a cyberpunk-inspired design aesthetic.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Algorithm Visualizations](#algorithm-visualizations)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Interactive Algorithm Visualizations**: Demonstrates BFS traversals and sorting algorithms
- **Responsive Design**: Fully responsive layout that works on all devices
- **Cyberpunk Aesthetic**: Modern design with algorithm-inspired visual elements
- **About Me Section**: Detailed personal background with academic interests and goals
- **Projects Showcase**: Highlighting personal and academic projects
- **Skills & Experience**: Visual representation of technical skills and experience
- **Contact Form**: Easy way for visitors to get in touch

## 📁 Project Structure

```
personal_website/
├── public/               # Static files
│   ├── images/           # Image assets
│   └── index.html        # HTML entry point
├── src/                  # Source code
│   ├── components/       # React components
│   │   ├── About.js      # About section component
│   │   ├── Contact.js    # Contact form component
│   │   ├── Header.js     # Header/navigation component
│   │   ├── Projects.js   # Projects showcase component
│   │   └── ...           # Other components
│   ├── styles/           # CSS styles
│   ├── utils/            # Utility functions and algorithm implementations
│   ├── App.js            # Main App component
│   └── index.js          # JavaScript entry point
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🛠️ Technologies Used

- **React**: v19.1.0
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6+)**: Modern JavaScript features
- **React Router**: For navigation between pages
- **Algorithm Visualizations**: Custom implementations of graph traversals and sorting algorithms

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal_website.git
   cd personal_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development Server

Run the development server:
```bash
npm start
```
This will start the app in development mode at [http://localhost:3000](http://localhost:3000).

### Building for Production

Create a production build:
```bash
npm run build
```
This generates optimized files in the `build` folder, ready for deployment.

## 🌐 Deployment

This site can be deployed to various hosting platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Add homepage to package.json:
   ```json
   "homepage": "https://yourusername.github.io/personal_website"
   ```
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

## 🧮 Algorithm Visualizations

The website features interactive visualizations of:

- **Graph Traversals**: Breadth-First Search (BFS) with animated node exploration
- **Sorting Algorithms**: Visual demonstrations of sorting efficiency
- **Network Graphs**: Interactive network visualizations

These visualizations are implemented in the `src/utils/` directory and rendered as React components.

## 🎨 Customization

### Personal Information

Update your personal information in the About component:
- `src/components/About.js`: Edit the text content to reflect your background, interests, and goals

### Projects

Add your own projects in the Projects component:
- `src/components/Projects.js`: Modify the project data to showcase your work

### Styling

Customize the visual appearance:
- `src/styles/`: Modify CSS files to change colors, fonts, and layout

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React