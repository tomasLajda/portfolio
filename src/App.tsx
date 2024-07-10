import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import { Button } from './components/ui/button';

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <ModeToggle />
        <Button variant='default' />
        <header>
          <p>Logo</p>
          <ul>
            <li className=''>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </header>
      </ThemeProvider>
    </>
  );
};

export default App;
