import { useMemo } from "react";
import Preview from "./Preview";






const UploadForm = ({ inputs, isVisible, onChange, onSubmit }) => {



  //Object.values() method to get an array of all the values in the inputs object, and then uses the some() method to check if any of those values are falsy.
  //If any value in the inputs object is falsy, then the some() method will return true, and the !! operator will coerce the return value to a boolean true.
  const isDisabled = useMemo(() => {
    return !!Object.values(inputs).some(input => !input)
  }, [inputs])


  return (
    isVisible && <>
      <p className="h4 text-center mb-3 text-center">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <Preview {...inputs} />
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="file" onChange={onChange} />
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