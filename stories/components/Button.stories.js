import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "./button-styles.css";

import { Primary, Clicked } from "./Button";

storiesOf("Image", module).add("Basic", () => (
  <div>
    <Primary onClick={action("clicked")} />
  </div>
));
storiesOf("Button", module).add("Hipster", () => (
  <div>
    <Clicked className={styles.clicked} onClick={action("clicked")} />
  </div>
));
