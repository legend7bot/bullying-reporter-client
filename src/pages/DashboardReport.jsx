import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function DashboardReport() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reportData, setReportData] = useState();
  const user = JSON.parse(localStorage.getItem('user'));

  const getReport = async () => {
    let config = {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    };
    const response = await axios.get(
      `https://bullying-reporter.herokuapp.com/api/dashboard/reports/report/${id}`,
      config
    );
    return response.data;
  };

  useEffect(() => {
    getReport().then((data) => {
      setReportData(data);
    });
  }, []);

  const handleResolved = (event) => {
    setReportData({ ...reportData, isResolved: event.target.value });
  };

  const updateReport = async () => {
    let config = {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    };
    const response = await axios.put(
      `https://bullying-reporter.herokuapp.com/api/dashboard/reports/update/${id}`,
      reportData,
      config
    );
    return response.data;
  };

  return (
    <div>
      Report of {id}
      {reportData ? (
        <>
          <Button
            variant="outlined"
            onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <h3>Name: {reportData.name}</h3>
            <h4>Email: {reportData.email}</h4>
            <h4>Contact: {reportData.contact}</h4>
            <h4>Location: {reportData.location}</h4>
            <h4>Resolved: {reportData.isResolved ? 'Yes' : 'No'}</h4>
            <p>Description: {reportData.description}</p>
            <p>Accused Details: {reportData.accusedDetails}</p>

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Resolved</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={reportData.isResolved}
                onChange={handleResolved}>
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Resolved"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Not Resolved"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              value={reportData.status}
              onChange={(e) => setReportData({ ...reportData, status: e.target.value })}
              id="filled-basic"
              label="Status"
              variant="filled"
            />
            <TextField
              value={reportData.note}
              onChange={(e) => setReportData({ ...reportData, note: e.target.value })}
              id="filled-basic"
              label="Note"
              variant="filled"
            />
            <Button
              variant="contained"
              onClick={updateReport}>
              Update
            </Button>
          </Box>
        </>
      ) : (
        'hey'
      )}
    </div>
  );
}

export default DashboardReport;

// {
//   report ? (
//     <>
//       <h3>Name: {report.name}</h3>
//       <h4>Email: {report.email}</h4>
//       <h4>Contact: {report.contact}</h4>
//       <h4>Location: {report.location}</h4>
//       <h4>Resolved: {report.isResolved ? 'Yes' : 'No'}</h4>
//       <p>Description: {report.description}</p>
//       <p>Accused Details: {report.accusedDetails}</p>
//     </>
//   ) : (
//     'hey'
//   );
// }
