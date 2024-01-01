import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

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

function TimeTables() {
    return (
        <div style={{ paddingRight: 4 }}>
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

export default TimeTables;