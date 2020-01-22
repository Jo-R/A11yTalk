import React, { useState } from "react";
import styled from "styled-components";
import { DownIcon } from "./DownIcon";
import { UpIcon } from "./UpIcon";

// a React version of https://24ways.org/2019/making-a-better-custom-select-element/

// TODO SEE THIS ARTICLE AS WELL https://www.24a11y.com/2019/select-your-poison/

export const Select = ({options}) => {
  const [showCustomDropdown, setShowCustomDropdown] = useState(true);

  const handleKeyDown = (e) => {
    const active = document.activeElement;
    if (e.keyCode === 13) { // enter key
      setShowCustomDropdown(false);
    }
    if (e.keyCode === 27) {// esc key
      setShowCustomDropdown(false);
    }
    if (e.keyCode === 40) { // down arrow
      const idx = parseInt(e.target.dataset.id, 10);
      if (idx < options.length - 1 && active.nextSibling) {
        e.preventDefault(); // prevent scrolling the drop down scrollbar
        active.nextSibling.focus();
      }
    }
    if (e.keyCode === 38) { // up arrow
      const idx = parseInt(e.target.dataset.id, 10);
      if (idx > 0 && active.previousSibling) {
        e.preventDefault(); // prevent scrolling the drop down scrollbar
        active.previousElementSibling.focus();
      }
    }
  };

  const handleInputChange = (e) => {
    if (!e.target.value) { // TODO NEED CHANGIN TO NULL OR WHITESPACE CHECK
      setShowCustomDropdown(false);
      return;
    }
    if (!showCustomDropdown) {
      setShowCustomDropdown(true);
    }
  };

  const handleMouseSelect = (e) => {
    setShowCustomDropdown(false);
  };

  const handleLoseFocus = () => {
    setShowCustomDropdown(false);
  };

  const handleGetFocus = (e) => {
    if (e.target.value !== "") {
      setShowCustomDropdown(true);
    }
  };


  return (
    <WrapperDiv>
      <SampleDiv onMouseLeave={handleLoseFocus}>
        <label htmlFor="custom-select-input">User Type</label>
        <div
          id="custom-select-status"
          className="hidden-visually"
          aria-live="polite"
        />
        <CustomSelect 
          id="myCustomSelect"
          role="combobox"
          aria-haspopup="listbox"
          aria-owns="custom-select-list"
        >
         
          <StyledInput
            type="text"
            id="custom-select-input"
            aria-describedby="custom-select-info"
            aria-autocomplete="both"
            aria-controls="custom-select-list"
            handleOnChange={handleInputChange}
            onFocus={handleGetFocus}
          />
          <span id="custom-select-info" className="hidden-visually">
            Arrow down for options or start typing to filter.
          </span>
          <IconWrapper>
            {
              showCustomDropdown && <DownIcon />
            }
            {
              !showCustomDropdown && <UpIcon />
            }
          </IconWrapper>
          <Options 
            id="custom-select-list" 
            isHidden={showCustomDropdown}
            role="listbox"
            aria-expanded={showCustomDropdown}
            onClick={handleMouseSelect}
            onKeyDown={handleKeyDown}
          >
            {
              options && options.map((item, index) => 
                <li
                  key={index}
                  data-id={index}
                  role="option"
                  tabIndex={0}
                >
                  {item}
                </li>
              )
            }
          </Options>
        </CustomSelect>
      </SampleDiv>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  margin: 1em auto;
  text-align: left;
`;

const SampleDiv = styled.div`
  border: 1px solid #eeeeee;
  background: #ffffff;
  max-width: 30em;
  padding: 1em;
  margin-bottom: 1em;
`;

const CustomSelect = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  display: block;
  font-size: 1em;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.25em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  position: relative;
  z-index: 10;

  :hover, :focus {
    border: 2px dashed blue;
    color: #222;
    outline: none;
  }
`;

const IconWrapper = styled.span`
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    z-index: 20;
    border: 1px solid white;
    background: transparent;
`;

const Options = styled.ul`
  ${({ isHidden }) => isHidden && `display: none`}
  border: 1px solid #aaa;
  border-radius: 0 0 0.25em 0.25em;
  line-height: 1.5;
  margin: 0;  
  margin-top: -0.5em;
  padding: 0;
  list-style-type: none;
  font-weight: normal;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  width: calc(100% - 1px);
  background-color: #ffffff;

  > li {
    padding: 1em;

    :hover {
      background: blue;
      color: #fff;
      border: 1px solid blue;
      border-width: 0 0 0 1px;
    }

    :focus {
      border: 2px dashed blue;
    }
  }
`;
