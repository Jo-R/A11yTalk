import React from 'react';

// a React version of https://24ways.org/2019/making-a-better-custom-select-element/
export const Select = () => {
  return (
    <div className="App">
    <div class="wrapper">
      <div class="sample">
        <label for="custom-select-input">User Type</label>
        <div id='custom-select-status' class='hidden-visually' aria-live="polite"></div>
        <div class="custom-select" id="myCustomSelect">
          <input type="text" id="custom-select-input" class="select-css" aria-describedby="custom-select-info" />
          <span id="custom-select-info" class="hidden-visually">Arrow down for options or start typing to filter.</span>
          <span class="custom-select-icons">
						<svg width="16" height="16" viewBox="0 0 16 16" focusable="false" aria-hidden="true" id="icon-circle-down" class="icon" role="img">
							<path d="M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zM1.5 8c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5z"></path>
							<path d="M4.957 5.543l-1.414 1.414 4.457 4.457 4.457-4.457-1.414-1.414-3.043 3.043z"></path>
						</svg>
						<svg width="16" height="16" viewBox="0 0 16 16" focusable="false" aria-hidden="true" id="icon-circle-up" class="icon hidden-all" role="img">
							<path d="M0 8c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zM14.5 8c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5z"></path>
							<path  d="M11.043 10.457l1.414-1.414-4.457-4.457-4.457 4.457 1.414 1.414 3.043-3.043z"></path>
						</svg>							
					</span>
          <ul class="custom-select-options hidden-all" id="custom-select-list">
            <li><strong>User</strong><br />Logged in Users can read locked content and update their profile.</li>
            <li><strong>Author</strong><br />Authors can create, edit and delete their own posts.</li>
            <li><strong>Editor</strong><br />Editors can create, edit and delete all posts by all authors.</li>
            <li><strong>Manager</strong><br />Managers have the same permissions as Editors, plus they can create, edit and delete categories, pages and manage comments.</li>
            <li><strong>Administrator</strong><br />Administrators have full control over the posts, pages, categories, themes and plugins of the site.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}