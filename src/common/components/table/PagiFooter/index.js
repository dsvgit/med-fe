import React, { PropTypes, Component } from 'react';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import IconButton from 'material-ui/IconButton';

const styles = {
  //footerContent: {
  //  float: 'right'
  //},
  //footerText: {
  //  float: 'right',
  //  paddingTop: '16px',
  //  height: '16px'
  //}
};

export default class extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    page: PropTypes.number.isRequired, // current offset
    pageSize: PropTypes.number.isRequired, // total number of rows
    total: PropTypes.number.isRequired, // num of rows in each page
    onPageClick: PropTypes.func.isRequired // what to do after clicking page number
  }

  render() {

    let { page, pageSize, total } = this.props;

    let offset = (page - 1)*pageSize;
    let limit = pageSize;

    return (
      <div style={styles.footerContent}>
        <IconButton disabled={offset === 0} onClick={this.props.onPageClick.bind(null, 'prev', page == 1 ? page : page - 1, pageSize)}>
          <ChevronLeft/>
        </IconButton>
        <IconButton disabled={offset + limit >= total} onClick={this.props.onPageClick.bind(null, 'next', page + 1, pageSize)}>
          <ChevronRight/>
        </IconButton>
        <div>{Math.min((offset + 1), total) + '-' + Math.min((offset + limit), total) + ' из ' + total}</div>
      </div>
    );
  }

}
