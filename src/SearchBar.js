// import { useState } from "react";
import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete"; // Ensure correct import and usage

export default function SearchBar() {
  const [selectedItem, setSelectedItem] = useState({});

  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string, results) => {
    console.log("str:", string, "res:", results);
  };

  const handleOnSelect = (item) => {
    setSelectedItem(item);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div>
      <header>
        <div style={{ width: "300px" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
          />
        </div>
        <span>{selectedItem.name}</span>
      </header>
    </div>
  );
}
