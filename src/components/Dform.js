import React, { useState,useRef } from "react";
import {
  TextField,
  Button

} from "@material-ui/core";
 import MenuItem from "@material-ui/core/MenuItem";
import "../assets/css/form.css";
import { stateCity } from "./State_City";
import Autocomplete from "@material-ui/lab/Autocomplete";
import illus from "../assets/images/illus.jpg";
import validate from './validation';

const Dform = () => {
  const [state, setState] = useState("");
  const [errors, setErrors] = useState("");
  const [selectCity, setSelectCity] = useState(true);
   const formRef = useRef();
  const handleReset = () => {
    formRef.current.reset();

  };
  const [data, setData] = useState({
    name: "",
    number: "",
    state: "",
    city: "",
    line1: "",
    line2: "",
    landmark: "",
    pincode: "",
  });



  const handleStateChange = (e) => {



    setState(e.target.value);
    setSelectCity(false);

  };

  const handleEventChange =(e) => {

    const keyName= e.target.name;
    const value=e.target.name;

    setErrors(prevState => ({
                ...prevState,
                [keyName]: '',
            }));

            setData({ ...data, [keyName]: value });
        if (!value) {
            setErrors(prevState => ({ ...prevState, [keyName]: `${keyName} is required` }));
        }
  }

  const onSubmit = (e) => {


    setErrors(validate(data));
  }
 

  return (
    <div className="box">
      <div className="box-primary">
        <img src={illus} className="ill" height="500px" alt="Illustration"  />
      </div>
      <div className="box-secondary">

        <form ref={formRef}>
        <h1>Enter Address Details</h1>
          <TextField id="outlined-basic" label="Name" variant="outlined" name='name' onChange={handleEventChange} />
               {errors.name && <p className="errmsg">{errors.name}</p>}
          <TextField
            id="outlined-basic"
            label="Contact Number"
            variant="outlined"
            name="number"
            onChange={handleEventChange}

          />
          {errors.number && <p className="errmsg">{errors.number}</p>}

          <TextField
            label="Select State*"
            variant="outlined"
            select
            autoComplete="off"
            value={state}
            onChange={handleStateChange}
            name="state"

          >
          {errors.states && <p className="errmsg">{errors.states}</p>}

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
                className="autofield"
                style={{ width: "40vw" }}
                {...params}
                InputProps={{ ...params.InputProps, endAdornment: null }}
                label="City*"
                variant="outlined"
                name='city'
                onChange={handleStateChange}

              />
            )}
          />
          {errors.city && <p className="errmsg">{errors.city}</p>}

          <TextField
            id="outlined-basic"
            label="Line 1 Address"
            variant="outlined"
            name="line1"
            onChange={handleEventChange}

          />
          {errors.line1 && <p className="errmsg">{errors.line1}</p>}

          <TextField
            id="outlined-basic"
            label="Line 2 Address"
            variant="outlined"
            name='line2'
            onChange={handleEventChange}

          />
          {errors.line2 && <p className="errmsg">{errors.line2}</p>}

          <TextField id="outlined-basic" label="Landmark" variant="outlined" name='landmark' onChange={handleEventChange} />
          {errors.landmark && <p className="errmsg">{errors.landmark}</p>}

          <TextField id="outlined-basic" label="Pincode" variant="outlined" name='pincode' onChange={handleEventChange}/>
          {errors.pincode && <p className="errmsg">{errors.pincode}</p>}

          <div className="btn-container">
            <Button variant="contained" color="primary" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Submit
            </Button>


          </div>
        </form>
      </div>
    </div>



  );
};
export default Dform;
