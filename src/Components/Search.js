import React, {useState} from "react";
import { MDBCol } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css'

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = (e) => {
        const val = e.target.value
        setSearchTerm(val)
        props.handleFetch(searchTerm)
    }
  return (
    <MDBCol md="6">
      <input onChange={handleChange} className="form-control" type="text" placeholder="Search" aria-label="Search" value={searchTerm}/>
    </MDBCol>
  );
}

export default Search;