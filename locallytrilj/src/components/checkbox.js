import React, { useState } from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
const CheckBox = ({ tags, setFilter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)
  const tagClicked = e => {
    console.log(e.target.value)
  }
  console.log(tags)
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Filtriraj objekte</DropdownToggle>
      <DropdownMenu right>
        {tags.map(tag => (
          <DropdownItem value={tag} onClick={tagClicked}>
            {tag}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default CheckBox
