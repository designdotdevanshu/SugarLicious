import React from 'react'
import { BiSearch } from "react-icons/bi"
import { RiArrowDropDownLine } from "react-icons/ri"
import { MdFilterList } from "react-icons/md"
const SearchBar = ({ position }) => {
  return (
    <div id='SearchBar' style={{ marginTop: `-${position}px` }}>
      <BiSearch id='SearchICON' />
      <input type='text' placeholder='SEARCH PRODUCT HERE.....' />
      <div id='Filter'>
        <div id='fliterTEXT'>
          <p>FILTER</p>
          <RiArrowDropDownLine />
        </div>
        <MdFilterList id='fliterTEXT' />
      </div>
    </div>
  )
}

export default SearchBar