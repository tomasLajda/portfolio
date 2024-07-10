import Nav from './components/nav';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  return (
    <div className='flex justify-center'>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Nav />
      </ThemeProvider>
    </div>
  );
};

export default App;
