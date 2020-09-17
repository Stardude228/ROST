// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { Button, Input } from "reactstrap";
// import { useHistory, Link } from "react-router-dom";

// const SearchExample = (props) => {
//   const [filterText, setFilterText] = useState("");
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(process.env.REACT_APP_API_URL_PRODUCTS + "/posts")
//       .then(r => r.json())
//       .then(data => setData(data))
//   }, [])

//   const filteredItems = data.filter(
//     data =>
//       data.title.toLocaleLowerCase().includes(filterText)
//   );
//   const history = useHistory();
//   const itemsToDisplay = filterText ? filteredItems : props.data;
//   const handleSearch = (e) => {
//     e.preventDefault();
//     history.replace("/products/?search=" + filterText);
//   }

//   const rightDirection = history.replace("/products/?search=" + filterText);

//   return (
//     <div >
      
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   const { data } = state.ProductReducer
//   return { data };
// }

// export default connect(mapStateToProps, null)(SearchExample);