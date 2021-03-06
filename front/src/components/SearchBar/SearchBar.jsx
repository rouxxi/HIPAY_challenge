import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import SearchBarStyle from "./SearchBarStyle";
import SearchBarPropTypes from "../../PropTypes/SearchBarPropTypes";

function SearchBar(props) {
  const { researchField, setResearchField } = props;
  const classes = SearchBarStyle();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={classes.searchInput}
        value={researchField}
        onChange={(e) => setResearchField(e.target.value)}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}
SearchBar.propTypes = SearchBarPropTypes;

export default SearchBar;
