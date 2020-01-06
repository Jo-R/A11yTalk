import React, { useState } from "react";
import styled from "styled-components";

// a React version of https://24ways.org/2019/making-a-better-custom-select-element/
export const Select = () => {
  const [optionsHidden, setOptionsHidden] = useState(true);

  return (
    <WrapperDiv>
      <SampleDiv>
        <label for="custom-select-input">User Type</label>
        <div
          id="custom-select-status"
          class="hidden-visually"
          aria-live="polite"
        />
        <div class="custom-select" id="myCustomSelect">
          <input
            type="text"
            id="custom-select-input"
            class="select-css"
            aria-describedby="custom-select-info"
          />
          <span id="custom-select-info" class="hidden-visually">
            Arrow down for options or start typing to filter.
          </span>
          <span class="custom-select-icons">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              focusable="false"
              aria-hidden="true"
              id="icon-circle-down"
              class="icon"
              role="img"
            >
              <path d="M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zM1.5 8c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5z"></path>
              <path d="M4.957 5.543l-1.414 1.414 4.457 4.457 4.457-4.457-1.414-1.414-3.043 3.043z"></path>
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              focusable="false"
              aria-hidden="true"
              id="icon-circle-up"
              class="icon hidden-all"
              role="img"
            >
              <path d="M0 8c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zM14.5 8c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5z"></path>
              <path d="M11.043 10.457l1.414-1.414-4.457-4.457-4.457 4.457 1.414 1.414 3.043-3.043z"></path>
            </svg>
          </span>
          <Options id="custom-select-list" isHidden={optionsHidden}>
            <li>
              <strong>User</strong>
              <br />
              Logged in Users can read locked content and update their profile.
            </li>
            <li>
              <strong>Author</strong>
              <br />
              Authors can create, edit and delete their own posts.
            </li>
            <li>
              <strong>Editor</strong>
              <br />
              Editors can create, edit and delete all posts by all authors.
            </li>
            <li>
              <strong>Manager</strong>
              <br />
              Managers have the same permissions as Editors, plus they can
              create, edit and delete categories, pages and manage comments.
            </li>
            <li>
              <strong>Administrator</strong>
              <br />
              Administrators have full control over the posts, pages,
              categories, themes and plugins of the site.
            </li>
          </Options>
        </div>
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

const Options = styled.ul`
  ${({ isHidden }) => `display: none`}
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
