import React from "react"

const Form = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-5">
          <form className="d-flex justify-content-between">
            <input type="text" name="task" id="task" className="form-control" placeholder="Task name" />
            <button className="btn btn-primary mx-2">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
