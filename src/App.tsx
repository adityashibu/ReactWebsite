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

const rows = [
  createDataforTT('Introduction to DSA', "09:00", "Salma", 2.14),
  createDataforTT('Database systems', "11:00", "Sheikh. T", 2.15),
  createDataforTT('Hardware software Interface', "12:00", "Kayvan K.", 2.15),
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

      <Table sx={{ minWidth: 1500, mt: 3 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ border: 1 }}>
            <TableCell sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Course Name</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Time</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Faculty</TableCell>
            <TableCell align="right" sx={{ letterSpacing: '.3rem', fontSize: '1.5rem', fontWeight: 'bold', border: 1 }}>Room Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
      <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <TimeTables />
      </div>
    </div>
  );
}
export default App;