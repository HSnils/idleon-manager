import {
  createStyles, IconButton, makeStyles, Tooltip,
} from '@material-ui/core';
import React from 'react';

import Brightness7Rounded from '@material-ui/icons/Brightness7Rounded';
import Brightness4Rounded from '@material-ui/icons/Brightness4Rounded';

interface TopbarProps {
  darkMode: boolean;
  handleThemeChange: () => void,
}

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '0px',
    right: '2rem',
    zIndex: 100,
  },
}));

export const Topbar: React.FC<TopbarProps> = ({
  darkMode,
  handleThemeChange,
}: TopbarProps): React.ReactElement => {
  const tooltip = `Change to ${darkMode ? 'light' : 'dark'} theme`;

  const ThemeIcon = () => {
    if (darkMode) {
      return <Brightness7Rounded />;
    }
    return <Brightness4Rounded />;
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title={tooltip} aria-label={tooltip}>
        <IconButton aria-label="change theme" onClick={handleThemeChange}>
          <ThemeIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Topbar;
