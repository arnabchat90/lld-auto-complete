import React from "react";

export default function SuggestionItem(props) {
  const { suggestion } = props;
  return (
    <>
      <li className="suggestion-item" key={suggestion.id}>
        {suggestion.text}
      </li>
    </>
  );
}
