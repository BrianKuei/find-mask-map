import React, { useState } from 'react';

import { ToggleImage, ToggleCheckbox } from './nav-toggle.styles';

export const NavToggle = () => {
  const [changeToggleImage, setChangeToggleImage] = useState(false);

  const changeToggleImageHandler = () => {
    setChangeToggleImage(!changeToggleImage);
  };
  return (
    <ToggleImage htmlFor="toggleImage" onClick={changeToggleImageHandler} changeToggleImage={changeToggleImage} />
  );
};

export const NavToggleCheckbox = () => (
  <ToggleCheckbox type="checkbox" name="toggle-image" id="toggleImage" />
);
