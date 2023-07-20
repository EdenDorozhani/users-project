import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dataAction } from "../store";
import { useEffect, useState } from "react";

const UserForm = () => {
  const data = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params;
  const idValue = Object.keys(userId).length;

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

  //GET DEFAULTVALUES IF WE ARE ON EDIT FORM WE WANT DATA
  useEffect(() => {
    if (idValue === 0) {
      return;
    }
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

  //SAVE INPUT FIELDS VALUES
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (formData[name]?.length < 5) {
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

  //CONTROLL IF FORM IS TOUCHED OR NO
  const onBlurHandler = () => {
    for (const values in formData) {
      if (values === "id") {
        continue;
      }
      if (formData[values]?.length < 5) {
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

  //CONTROLL VALIDATION AND CONTROLL IF WE WANT TO EDIT OR SEND DATA
  const sendDataHandler = () => {
    setError((prevFormData) => ({
      ...prevFormData,
      inTouch: true,
    }));
    if (!error.inTouch || error.errorState) {
      return;
    } else {
      if (idValue === 0) {
        dispatch(
          dataAction.addItem({
            ...formData,
            city: { city: formData.city },
          })
        );
      } else {
        dispatch(dataAction.editItem(formData));
      }
    }
  };

  //JSX CODE
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
                  onFocus={onBlurHandler}
                  onBlur={onBlurHandler}
                  defaultValue={formData[data]}
                  onChange={onChangeHandler}
                />
                {error.inTouch && formData[data]?.length < 5 && (
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

export default UserForm;
