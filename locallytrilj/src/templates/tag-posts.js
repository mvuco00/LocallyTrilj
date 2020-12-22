import React from "react"

const TagsPost = ({ data, pageContext }) => {
  const { tag } = pageContext
  const pageHeader = `TEMA: ${tag == "izvjestaj" ? "izvještaj" : tag}`
  return <div className="naslovteme">{pageHeader}</div>
}
export default TagsPost
