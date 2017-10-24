import React, { Component } from 'react'

class SearchBar extends Component {

  //Function copied from W3Schools HOWTO
  searchSurvivor() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

      //Busca as linhas da tabela que contém as células correspondentes com os textos de busca
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
    }
  }

  render() {
    return (
      <input type="text"
        id="myInput"
        onKeyUp={this.searchSurvivor.bind(this)}
        placeholder="Search Survivor"
        className="Survivor-search-input"
      />
    );
  }
}

export default SearchBar;
