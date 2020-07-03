import React from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

import { sections } from "./directory.data.js";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div class="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
