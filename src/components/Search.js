import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";
import { useHistory, Link } from "react-router-dom";

const SearchExample = (props) => {
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL_PRODUCTS + "/posts")
      .then(r=>r.json())
      .then(data=>setData(data))
  },[])

  const filteredItems = data.filter(
    data =>
      data.title.toLocaleLowerCase().includes(filterText)
  );
  const history = useHistory();
  const itemsToDisplay = filterText ? filteredItems : props.data;
  const handleSearch = (e)=>{
    e.preventDefault();
    history.replace("/products/?search="+filterText);
  }

  const rightDirection = history.replace("/products/?search="+filterText);

  return (
    <div >
      <form className="d-flex" onSubmit={handleSearch}>
        <Input 
          type="text" 
          name="text" 
          id="textInput" 
          placeholder="Filter items by keyword"
          value={filterText}
          onChange={e => setFilterText(e.target.value.toLocaleLowerCase())} />
        <Button onClick={handleSearch} variant="outline-success">Search</Button>
      </form>

      <hr />
      {!filteredItems.length && (
        <div><p style={{color: "white"}}>There are no items to display adjust your filter criteria</p></div>
      )}
      {filterText && itemsToDisplay.map(item => (
        <div key={item.title}>
          <img alt='car' src={item.image} width="80" height="40" />
          <Link to={rightDirection} style={{color: "white"}}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  const { data } = state.ProductReducer
  return { data };
}

export default connect(mapStateToProps, null)(SearchExample);