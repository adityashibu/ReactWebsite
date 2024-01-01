import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const pages = ['TimeTables', 'Resources', 'Tests'];

function createDataforTT(
  name: string,
  time: string,
  faculty: string,
  room: number,
) {
  return { name, time, faculty, room };
};

const rowsTT = [
  createDataforTT('Introduction to DSA', "09:00", "Salma", 2.14),
  createDataforTT('Database systems', "11:00", "Sheikh. T", 2.15),
  createDataforTT('Hardware software Interface', "12:00", "Kayvan K.", 2.15),
];

function createDataforResources(
  name: string,
  time: string,
  faculty: string,
  room: number,
) {
  return { name, time, faculty, room };
};

const rowsResources = [
  createDataforResources('Introduction to DSA', "09:00", "Salma", 2.14),
  createDataforResources('Database systems', "11:00", "Sheikh. T", 2.15),
  createDataforResources('Hardware software Interface', "12:00", "Kayvan K.", 2.15),
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '2rem',
            }}
          >
            BSC YEAR 2 SEM 2
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx: 3, color: 'white', display: 'block', fontSize: '1.2rem' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            ESSENTIAL LINKS:
          </Typography>
          <a
            href="https://www.google.com"
            style={{
              textDecoration: 'none',
              color: 'white',
              transition: 'color 0.3s',
            }}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'lightgray')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </a>
          <a
            href="https://www.google.com"
            style={{
              textDecoration: 'none',
              color: 'white',
              transition: 'color 0.3s',
            }}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'lightgray')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </a>
          <a
            href="https://www.google.com"
            style={{
              textDecoration: 'none',
              color: 'white',
              transition: 'color 0.3s',
            }}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'lightgray')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </a>
          <a
            href="https://www.google.com"
            style={{
              textDecoration: 'none',
              color: 'white',
              transition: 'color 0.3s',
            }}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'lightgray')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </a>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

function Footer() {

  return (
    <AppBar position="static" sx={{ mt: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              pt: 3,
              pb: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Designed by Aditya S. & David F.
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>

  );
}

function TimeTables() {
  return (
    <div>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mt: 4,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          fontSize: '2rem',
          pr: 4,
        }}
      >
        TEACHING TIMETABLES
      </Typography>

      <Table sx={{ maxWidth: 1000, mt: 3, mr: 7 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ border: 1 }}>
            <TableCell sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Course Name</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Time</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Faculty</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Room Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTT.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, border: 1 }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.faculty}</TableCell>
              <TableCell align="right">{row.room}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function Resources() {
  return (
    <div>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mt: 4,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          fontSize: '2rem',
          pr: 4,
        }}
      >
        RESOURCES
      </Typography>

      <Table sx={{ maxWidth: 1000, mt: 3 }} aria-label="time table">
        <TableHead>
          <TableRow sx={{ border: 1 }}>
            <TableCell sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Course Name</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Time</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Faculty</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Room Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsResources.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, border: 1 }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.faculty}</TableCell>
              <TableCell align="right">{row.room}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ maxWidth: '1000', margin: '0 auto' }}>
        <TimeTables />
        <Resources />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;