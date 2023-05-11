import { useContext, useMemo } from "react";
import Preview from "./Preview";
import { Context } from "../context";
import Firestore from "../handlers/firestore";
import Storage from "../handlers/storage";


const { writeDoc } = Firestore
const { uploadFile } = Storage;


const UploadForm = () => {
  const { state, dispatch } = useContext(Context)
  const { isCollapsed: isVisible, inputs } = state


  // action dispatcher for type colapse and setInputs
  const handleOnChange = (e) => dispatch({ type: 'setInputs', payload: { value: e } })


  //upload from submit handler
  const handleOnSubmit = (e) => {
    e.preventDefault()
    uploadFile(state.inputs).then(media => {
      debugger
      writeDoc(inputs, "stocks").then(console.log('data passed'));
      dispatch({ type: 'setItem' })
      dispatch({ type: "collapse", payload: { bool: false } })
    })
  }

  //Object.values() method to get an array of all the values in the inputs object, and then uses the some() method to check if any of those values are falsy.
  //If any value in the inputs object is falsy, then the some() method will return true, and the !! operator will coerce the return value to a boolean true.
  const isDisabled = useMemo(() => {
    return !!Object.values(state.inputs).some(input => !input)
  }, [state.inputs])


  return (
    state.isCollapsed && <>
      <p className="h4 text-center mb-3 text-center">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <Preview {...state.inputs} />
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="file" onChange={handleOnChange} />
          </div>
          <button
            type="submit"
            className="btn btn-success float-end"
            disabled={isDisabled}
          >
            Save changes
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadForm;