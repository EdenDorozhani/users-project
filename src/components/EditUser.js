import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dataAction } from "../store";
import { useEffect, useState } from "react";

const EditUser = () => {
  const params = useParams();

  const data = useSelector((state) => state.items);

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

  // GET AND SET DEFAULT VALUES
  useEffect(() => {
    const editedItem = data.find((item) => {
      return item.id == params.id;
    });
    setFormData({
      id: editedItem?.id,
      name: editedItem?.name,
      email: editedItem?.email,
      username: editedItem?.username,
      city: editedItem?.address.city,
    });
  }, [data]);

  const onChangeHandler = (e) => {
    //SAVE INPUT FIELDS VALUES
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

  const onBlurHandler = () => {
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
  };

  //CONTROLL AND SEND EDITED DATA

  const sendDataHandler = () => {
    if (!error.inTouch || error.errorState) {
      return;
    } else {
      dispatch(dataAction.editItem(formData));
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
                  onBlur={onBlurHandler}
                  defaultValue={formData[data]}
                  onChange={onChangeHandler}
                />
                {!error.inTouch && formData[data]?.length < 5 && (
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

export default EditUser;
