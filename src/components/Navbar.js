import { Menu, Input, Button, Icon, Header, Container } from 'semantic-ui-react';
import { useTheme } from '../context/ThemeContext';


function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      <Menu borderless style={{
        background: isDark ? '#23272f' : '#fcfcfa',
        color: isDark ? '#f8f8ff' : 'inherit',
        borderRadius: 0,
      }}>
        <Container style={{ padding: "0 150px" }}>
          <Menu.Item style={{ paddingLeft: 0 }}>
            <Icon name="users" size="big" circular inverted style={{ background: 'linear-gradient(135deg,#7ed6df,#48dbfb)', color: 'white', marginRight: 18 }} />
            <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <Header as='h1' style={{ color: isDark ? '#f8f8ff' : '#23272f', margin: 0, fontWeight: 700, fontSize: 32 }}>Contact Manager</Header>
              <div style={{ color: isDark ? '#f8f8ff' : '#8b8b8b', fontSize: 14, marginTop: 2 }}>Manage your contacts efficiently</div>
            </div>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: isDark
                    ? 'linear-gradient(135deg,#23272f 70%,#2d8cff 130%)'
                    : 'linear-gradient(135deg,#fff 70%,#8ed0f9 130%)',
                  boxShadow: isDark
                    ? '0 2px 8px 0 rgba(45,140,255,0.18)'
                    : '0 2px 8px 0 rgba(45,140,255,0.10)',
                  border: isDark ? '1.5px solid #2d8cff' : '1.5px solid #8ed0f9',
                  cursor: 'pointer',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }}
                onClick={toggleTheme}
                onMouseOver={e => {
                  e.currentTarget.style.background = isDark
                    ? '#2d8cff'
                    : '#e6f6ff';
                  e.currentTarget.style.boxShadow = '0 2px 12px 0 #2d8cff44';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = isDark
                    ? 'linear-gradient(135deg,#23272f 70%,#2d8cff 130%)'
                    : 'linear-gradient(135deg,#fff 70%,#8ed0f9 130%)';
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 2px 8px 0 rgba(45,140,255,0.18)'
                    : '0 2px 8px 0 rgba(45,140,255,0.10)';
                }}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <Icon
                  name={isDark ? 'moon' : 'sun'}
                  size='large'
                  style={{
                    color: isDark ? '#f8f8ff' : '#23272f',
                    filter: isDark ? 'drop-shadow(0 0 4px #2d8cff)' : 'none',
                  }}
                />
              </span>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}

export default Navbar;