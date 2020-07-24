import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'

function App() {
  const [formData, updateFormData] = useState([])
  const [returnData, updateReturnData] = useState()

  function getData(submittedData){
    submittedData.preventDefault()
    let submitData = {};

    for (let entry of document.forms[0].elements){
      submitData[entry.name] = entry.value
    }

    updateReturnData(JSON.stringify(submitData))
  }

  function renderJSON(evnt) {
    let JSONdata = eval(evnt.target.value);

    let copy = [...formData];

    updateFormData(JSONdata);
    console.log(formData)
      }

    return (
      <div className="App">
        <header className="">
          <h1>JSON Input Builder</h1>
        </header>
        <h3>Paste the JSON Data</h3>
        <textarea name="jsonInput" onBlur={evnt => renderJSON(evnt)} cols="50" rows="30"></textarea>

        <form onSubmit={getData} method="POST">
          <p>This is the Output</p>
        {formData.map(function (f) {
          if ('conditional' in f == true) {

            if (f.conditional.show_if()){
              console.log(f)
            }
        }
          return (
          <div>
          <label for={f.name}>{f.human_label}</label>
          <input id={f.name} name={f.name} type={f.type}/>
          </div>
          )
        })}
        <button type="submit">Submit</button>
      </form>
      <h3>Return Data</h3>
      {returnData}
      </div>
  );
}

export default App;
