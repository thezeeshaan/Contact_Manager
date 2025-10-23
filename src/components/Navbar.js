import { Menu, Input, Button, Icon, Header, Container } from 'semantic-ui-react';
import AddContactButton from './AddContactButton';
import { useTheme } from '../context/ThemeContext';


function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      <Menu borderless style={{
        background: isDark ? '#23272f' : '#fcfcfa',
        color: isDark ? '#f8f8ff' : 'inherit',
      }}>
        <Container>
          <Menu.Item style={{ paddingLeft: 0 }}>
            <Icon name="users" size="big" circular inverted style={{ background: 'linear-gradient(135deg,#7ed6df,#48dbfb)', color: 'white', marginRight: 18 }} />
            <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <Header as='h1' style={{ color: isDark ? '#f8f8ff' : '#23272f', margin: 0, fontWeight: 700, fontSize: 32 }}>Contact Manager</Header>
              <div style={{ color: isDark ? '#f8f8ff' : '#8b8b8b', fontSize: 14, marginTop: 2 }}>Manage your contacts efficiently</div>
            </div>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button toggle active={isDark} onClick={toggleTheme} icon labelPosition='left'>
                <Icon name={isDark ? 'moon' : 'sun'} />
                {isDark ? 'Dark' : 'Light'} Mode
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}

export default Navbar;