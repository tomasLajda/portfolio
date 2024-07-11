import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav';
import Projects from './components/projects';
import { ThemeProvider } from './components/theme-provider';
import Wrapper from './components/wrapper';

const App = () => {
  return (
    <div className='w-screen'>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Nav />
        <Wrapper className='mt-12'>
          <Home />
        </Wrapper>
        <Wrapper bgColor='bg-[hsl(var(--primary))]' textColor='white'>
          <About />
        </Wrapper>
        <Wrapper className='w-min-48 max-w-screen-xl'>
          <Projects />
        </Wrapper>
        <Wrapper
          bgColor='bg-[hsl(var(--primary))]'
          textColor='white'
          className='w-[40%] w-min-48 max-w-3xl'
        >
          <Contact />
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
