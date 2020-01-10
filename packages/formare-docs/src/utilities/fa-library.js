import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faCube, faColumns } from '@fortawesome/free-solid-svg-icons';

export const registerIcons = () => {
  return library.add(faBolt, faCube, faColumns);
};
