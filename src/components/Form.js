// import { Link, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { dataAction } from "../store/index";
// import { useEffect, useState } from "react";

// const Form = () => {
//   const params = useParams();
//   const data = useSelector((state) => state.items);
//   useEffect(() => {
//     const editedItem = data.find((item) => {
//       return item.id == params.id;
//     });
//     setNameValue(editedItem?.name);
//     setEmailValue(editedItem?.email);
//     setUsernameValue(editedItem?.username);
//     setCityValue(editedItem?.address.city);
//     setId(editedItem?.id);
//   }, [data]);

//   const dispatch = useDispatch();
//   const [nameValue, setNameValue] = useState("");
//   const [emailValue, setEmailValue] = useState("");
//   const [usernameValue, setUsernameValue] = useState("");
//   const [cityValue, setCityValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);
//   const [id, setId] = useState("");

//   const nameIsEmpty = nameValue?.trim().length === 0;
//   const emailIsEmpty = emailValue?.trim().length === 0;
//   const usernameIsEmpty = usernameValue?.trim().length === 0;
//   const cityIsEmpty = cityValue?.trim().length === 0;

//   const nameIsInvalid = nameIsEmpty && isTouched;
//   const emailIsInvalid = emailIsEmpty && isTouched;
//   const usernameIsInvalid = usernameIsEmpty && isTouched;
//   const cityIsInvalid = cityIsEmpty && isTouched;

//   const formIsEmpty =
//     nameIsEmpty || emailIsEmpty || usernameIsEmpty || cityIsEmpty;

//   console.log(formIsEmpty);

//   const onBlurField = (e) => {
//     setIsTouched(true);
//   };

//   const submitHandler = () => {
//     setIsTouched(true);

//     if (formIsEmpty) {
//       return;
//     } else {
//       dispatch(
//         dataAction.addItem({
//           id: 0,
//           name: nameValue,
//           email: emailValue,
//           username: usernameValue,
//           city: { city: cityValue },
//         })
//       );
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-header">
//         <h3>Form</h3>
//       </div>
//       <div className="form-body">
//         <div className="form-name">
//           <p>Name</p>
//           <input
//             type="text"
//             defaultValue={nameValue}
//             onChange={(e) => {
//               setNameValue(e.target.value);
//             }}
//             onBlur={onBlurField}
//           />
//           {nameIsInvalid ? (
//             <p style={{ color: "red", marginTop: 10 }}>Name field is empty!!</p>
//           ) : null}
//         </div>
//         <div className="form-email">
//           <p>Email</p>
//           <input
//             type="text"
//             defaultValue={emailValue}
//             onChange={(e) => {
//               setEmailValue(e.target.value);
//             }}
//             onBlur={onBlurField}
//           />
//         </div>
//         <div className="form-email">
//           <p>Username</p>
//           <input
//             type="text"
//             defaultValue={usernameValue}
//             onChange={(e) => {
//               setUsernameValue(e.target.value);
//             }}
//             onBlur={onBlurField}
//           />
//         </div>
//         <div className="form-email">
//           <p>City</p>
//           <input
//             type="text"
//             defaultValue={cityValue}
//             onChange={(e) => {
//               setCityValue(e.target.value);
//             }}
//             onBlur={onBlurField}
//           />
//         </div>
//         <div className="form-buttons">
//           <Link to="/">
//             <button className="cancel-button">Cancel</button>
//           </Link>
//           <Link to={formIsEmpty ? "" : "/"}>
//             <button className="submit-button" onClick={submitHandler}>
//               Submit
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;
