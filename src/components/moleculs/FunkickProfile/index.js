import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import css from './funkickProfile.module.scss';
import TentangKami from './TentangKami';
import Kontak from './Kontak';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={css.container}>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#000000',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(24),
    textTransform: 'none',
    '& > span': {
      borderColor: '#ffffff',
      borderColor: '#ffffff'
    },
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&:focus': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  selected: {
    fontWeight: theme.typography.fontWeightBold,
  }
}))((props) => (
  <Tab {...props} TabIndicatorProps={{ children: <span /> }} />
));

export default function FunkickProfile() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={css.tabContainer}>
      <AppBar position="static" color="transparent" className={css.appBar} elevation={0} style={{marginTop: 90}}>
        <StyledTabs 
          value={value} 
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <StyledTab label={"Tentang Kami"} {...a11yProps(0)} />
          <StyledTab label={"Kontak"} {...a11yProps(1)} />
        </StyledTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TentangKami />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Kontak />
      </TabPanel>
    </div>
  );
}