import About from './components/about';
import Home from './components/home';
import Nav from './components/nav';
import { ThemeProvider } from './components/theme-provider';
import Wrapper from './components/wrapper';

const App = () => {
  return (
    <div className='w-screen'>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Nav />
        <Wrapper>
          <Home />
        </Wrapper>
        <Wrapper bgColor='bg-[hsl(var(--primary))]' textColor='white'>
          <About />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default App;
