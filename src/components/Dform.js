import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import "../assets/css/form.css";
import { stateCity } from "./State_City";
import Autocomplete from "@material-ui/lab/Autocomplete";
import illus from '../assets/images/illus.jpg';

const Dform = () => {

const [state, setState] = useState("");

const [selectCity, setSelectCity] = useState(true);

const handleStateChange = (e) => {
  setState(e.target.value);
  setSelectCity(false);

};

const [data,setData] = useState({
  name:'',
  number:'',
state:'',
city:'',
line1:'',
line2:'',
landmark:'',
pincode:'',
})


  return (
    <div className="box">
    <div className="box-primary"><img src={illus} className="ill" height="500px" alt="Illustration"/></div>
    <div className="box-secondary">
    
      <form>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
        />
        <TextField
            label="Select State*"
            variant="outlined"
            select
            autoComplete="off"
            value={state}
            onChange={handleStateChange}
          >
            {stateCity.map((option, i) => (
              <MenuItem
                // className={classes.menustyle}
                key={i}
                value={option.name}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <Autocomplete
              disabled={selectCity}
              options={
                stateCity
                  .filter((sc) => sc.name === state)
                  .map((option) => option.cities)[0]
              }
              getOptionLabel={(option, i) => option}

              renderInput={(params) => (
                <TextField
                  style={{ width: "40vw" }}
                  {...params}
                  InputProps={{ ...params.InputProps, endAdornment: null }}
                  label="City*"
                  variant="outlined"
                />
              )}
            />
        <TextField
          id="outlined-basic"
          label="Line 1 Address"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Line 2 Address"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Landmark" variant="outlined" />
        <TextField id="outlined-basic" label="Pincode" variant="outlined" />
        <div className="btn-container">
        <Button variant="contained">Reset</Button>
        <Button variant="contained">Submit</Button>
        </div>
      </form>
      </div>
    </div>
  );
};
export default Dform;
