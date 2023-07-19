import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataAction } from "../store";
import { useState } from "react";

const AddNewUser = () => {
  const dispatch = useDispatch();

  //STATE DECLARATION
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    email: "",
    username: "",
    city: "",
  });
  const [error, setError] = useState({
    errorState: false,
    inTouch: false,
  });

  //SAVE AND CONTROLL INPUT FIELDS VALUES

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (formData[name].length < 5) {
      setError((prevFormData) => ({
        ...prevFormData,
        errorState: true,
      }));
    } else {
      setError((prevFormData) => ({
        ...prevFormData,
        errorState: false,
      }));
    }
  };

  //SEE IF INPUT FIELDS ARE TOUCHED

  const onBlurHandler = (e) => {
    for (const values in formData) {
      if (values === "id") {
        continue;
      }
      if (formData[values].length < 5) {
        setError((prevFormData) => ({
          ...prevFormData,
          errorState: true,
        }));
      }
    }

    setError((prevFormData) => ({
      ...prevFormData,
      inTouch: true,
    }));
  };

  //CONTROLL VALIDATION AND SEND DATA TO ADD NEW USER
  const sendDataHandler = () => {
    setError((prevFormData) => ({
      ...prevFormData,
      inTouch: true,
    }));
    if (!error.inTouch || error.errorState) {
      return;
    } else {
      dispatch(
        dataAction.addItem({
          ...formData,
          city: { city: formData.city },
        })
      );
    }
  };

  //JSX
  return (
    <div className="form-container">
      <div className="form-header">
        <h3>Form</h3>
      </div>
      <div className="form-body">
        {Object.keys(formData).map((data) => {
          if (data !== "id") {
            return (
              <div className="form-field" key={data}>
                <p>{data.charAt(0).toUpperCase() + data.slice(1)}</p>
                <input
                  type="text"
                  name={data}
                  defaultValue={formData[data]}
                  onChange={onChangeHandler}
                  onBlur={onBlurHandler}
                />
                {error.inTouch && formData[data].length < 5 && (
                  <p style={{ color: "red" }}>Invalid {data} field!</p>
                )}
              </div>
            );
          }
        })}
        <div className="form-buttons">
          <Link to="/">
            <button className="cancel-button">Cancel</button>
          </Link>
          <Link to={!error.inTouch || error.errorState ? "" : "/"}>
            <button className="submit-button" onClick={sendDataHandler}>
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
