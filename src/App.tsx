import ScrollUpButton from './components/scroll-up-button';
import About from './components/sections/about/about';
import Contact from './components/sections/contact/contact';
import Footer from './components/sections/footer/footer';
import Home from './components/sections/home/home';
import Nav from './components/sections/nav/nav';
import Projects from './components/sections/projects/projects';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  return (
    <div className='w-screen'>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUpButton />
      </ThemeProvider>
    </div>
  );
};

export default App;
