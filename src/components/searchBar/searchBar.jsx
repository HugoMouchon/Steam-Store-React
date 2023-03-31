import style from './style.module.scss';
import React, { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';

function SearchBar({ onSearch }) {

    const [searchText, setSearchText] = useState("");

    function handleChange(event) {
        setSearchText(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            onSearch(searchText);
        }
    }

    function handleButtonClick() {
        onSearch(searchText);
    }

    return (
        <div>
            <input
                className={style.input}
                type="text"
                value={searchText}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Cyberpunk 2077, Hades, Ori..."
            />
            <button
                className={style.btn}
                onClick={handleButtonClick}>
                <SearchOutlined
                    style={{
                        fontSize: 13,
                    }}
                />
            </button>
        </div>
    );
}

export default SearchBar;

