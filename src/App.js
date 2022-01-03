import './App.css';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';
import { useState } from "react"
import { addInfo } from './utils/functions';

const initialValues = {username:"", phoneNumber:"", gender:"NO INFO"}

function App() {
  const [info, setInfo] =useState(initialValues)

  const handleFormSubmit = () => {
    console.log(info);
    addInfo(info)
  }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit} />
      <Contacts />
    </div>
  );
}

export default App;
