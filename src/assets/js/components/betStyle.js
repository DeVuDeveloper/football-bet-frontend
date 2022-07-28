const betStyle = {
  container: {
    backgroundColor: '#1A404F',
    borderRadius: '20px',
    boxShadow: '0 3rem 6rem rgba(1, 3, 38, 0.5)',
  },
  tabMenu: {
    borderBottom: '1px solid #1DA885',
    paddingBottom: '1rem',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  tabItem: {
    marginRight: '1rem',
  },
  tabLink: {
    color: '#F2F2F2',
    fontSize: '1.875rem',
    padding: '0.5rem',
  },
  tabActive: {
    display: 'block',
    backgroundColor: '#1DA885',
    boxShadow: '0 0 10px #198F71',
    borderRadius: '10px !important',
    padding: '10px',
    height: '50px',
    width: '50px',
  },
  tabUnActive: {
    display: 'block',
    backgroundColor: 'transparent',
    color: '#F2F2F2',
    padding: '10px',
    height: '50px',
    width: '50px',
  },
  tabPanel: {
    border: 'none',
  },
  table: {
    width: '100%',
    marginBottom: 0,
  },
  tableHead: {
    padding: 0,
  },
  tableHeadItem: {
    padding: '0 0 0 7.8vh',
    border: 'none',
    color: '#F2F2F2',
    fontSize: '0.7rem',
  },

  tableBodyRow1: {
    '&:nth-child(odd)': {
      backgroundColor: '#7c677f',
    },
    '&:nth-child(even)': {
      backgroundColor: '#6B7A8F',
    },
  },

  date: {
    color: '#F2F2F2',
    fontEeight: 'lighter',
    fontSize: '0.8rem',
  },
};
export default betStyle;
