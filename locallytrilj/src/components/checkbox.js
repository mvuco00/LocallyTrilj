import React, { useState } from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
const CheckBox = ({ tags, setFilter, setFiltered }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)

  const filterFun = e => {
    setFiltered(true)
    setFilter(e)
  }
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Filtriraj objekte</DropdownToggle>
      <DropdownMenu right>
        {tags.map(tag => (
          <DropdownItem key={tag} value={tag} onClick={e => filterFun(e)}>
            {tag.replace("-", " ")}
          </DropdownItem>
        ))}
        <DropdownItem
          key="clean"
          value="clean"
          className="clean"
          onClick={e => filterFun(e)}
        >
          očisti
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default CheckBox
