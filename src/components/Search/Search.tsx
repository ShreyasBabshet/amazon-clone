import { useState } from "react";
import styles from "./Search.module.scss";
import { IOption, SearchProps } from "./Search.types.ts";
import searchIcon from "../../assets/search1.png";
import { Dropdown } from "@coditashq/react-ada-components";
const Search = ({ onChange }: SearchProps) => {
  // const [filteredCategories, setCategories] = useState(categoriesList);
  const [selectedOption, setSelectedOption] = useState<IOption[]>();

  return (
    <div className={styles.SearchBar}>
      <Dropdown
        isMulti
        options={[
          { id: 1, label: "shoes" },
          { id: 2, label: "T-shirt" },
          { id: 3, label: "Pants" },
          { id: 4, label: "grocery" },
        ]}
        containerProps={{ className: styles.searchContainer }}
        inputContainerProps={{ className: styles.input }}
        onChange={(options) => {
          if (Array.isArray(options)) setSelectedOption(options);
        }}
      />
      <div
        onClick={() => onChange?.(selectedOption ?? [])}
        className={styles.SeachIconContainer}
      >
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
};

export default Search;
