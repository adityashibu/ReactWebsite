import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: 8 }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, mb: 4 }}
                >
                    Welcome to BSC Year 2 Semester 2 Portal
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                    Explore teaching timetables, resources, and more!
                </Typography>
                <Typography variant="body1" align="center">
                    <Link to="/timetables" style={{ textDecoration: 'none' }}>
                        View Teaching Timetables
                    </Link>
                </Typography>
            </Container>
        </div>
    );
}

export default Home;