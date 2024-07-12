import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav';
import Projects from './components/projects';
import ScrollUpButton from './components/scroll-up-button';
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
