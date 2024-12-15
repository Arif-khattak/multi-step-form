import React from "react";

function Form({
  forms,
  formsData,
  index,
  handleSubmite,
  handleBack,
  handleInput,
}) {
  return (
    <div className="container">
      <form onSubmit={handleSubmite} action="" className="form">
        {index > 0 && (
          <a href="/" onClick={handleBack}>
            Back
          </a>
        )}
        <label>{forms[index].label}</label>
        <input
          required
          value={formsData[forms[index].id]}
          onChange={handleInput}
          type={forms[index].inputType}
          id={forms[index].id}
          placeholder={forms[index].placeholder}
        />
        <button>{forms[index].buttonName}</button>
      </form>
    </div>
  );
}

export default Form;
