# Professional Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Bootstrap, and Framer Motion.

## Features

- **Responsive Design**: Works on all device sizes
- **Animated UI**: Smooth animations with Framer Motion
- **Typing Animation**: Dynamic typing effect in the header
- **Particle Background**: Interactive particle system in the hero section
- **Glassmorphism**: Modern glass-like UI elements
- **Dark Theme**: Sleek dark theme with gradient accents
- **Project Showcase**: Project cards with hover effects
- **Skills Display**: Interactive skill badges with progress indicators
- **Resume Timeline**: Animated timeline for experience and education
- **Mobile Navigation**: Bootstrap-powered offcanvas menu for mobile

## Pages

1. **Home** - Hero section with animated background and glassy code box
2. **About** - Detailed information about the developer
3. **Projects** - Showcase of projects with live demos and GitHub links
4. **Skills** - Interactive display of technical skills
5. **Resume** - Animated timeline of experience, education, and awards
6. **Demos** - Experimental projects and tools
7. **404** - Custom not found page

## Technologies Used

- **Next.js 15** - React framework for production
- **TypeScript** - Strongly typed programming language
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap** - CSS framework for responsive design
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library for React
- **React Type Animation** - Typing animation component

## Getting Started

### Prerequisites

- Node.js (version 16.8 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Deployment

The portfolio is ready to be deployed on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## Project Structure

```
portfolio/
├── src/
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript types
│   └── app/globals.css   # Global CSS styles
├── public/               # Static assets
├── package.json          # Project dependencies and scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

## Customization

To customize the portfolio with your own information:

1. Update the personal information in the components
2. Replace the placeholder projects with your actual projects
3. Modify the skills section to reflect your expertise
4. Update the resume timeline with your experience
5. Replace the resume.pdf with your actual resume

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/docs/)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
