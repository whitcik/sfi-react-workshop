import React from 'react';
import { connect } from 'react-redux';

import getMailData from '../../api/getMailData';
import * as dataActions from '../../actions/dataActions';

import MailRow from './mailRow/MailRow';

import './Content.css';

class Content extends React.Component {

  componentDidMount() {
    getMailData().then((data) => {
      this.props.setMailData(data);
    });
  }

  generateRows() {
    const { mailData, selectedCategory, markAsDelete, toggleRead } = this.props;
    return Object.values(mailData)
      .filter(mailItem => mailItem.category === selectedCategory)
      .map(
        (mailItem, index) =>
        <MailRow
          mail={mailItem}
          index={index + 1}
          key={mailItem.id}
          markAsDelete={markAsDelete}
          toggleRead={toggleRead}
        />
      );
  }

  render() {
    return (
      <section className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Autor</th>
              <th>Tytuł</th>
              <th>Treść</th>
              <th>Data</th>              
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.generateRows()}
          </tbody>
        </table>
      </section>
    );
  }
}

function mapStateToProps(store) {
  return {
    selectedCategory: store.view.selectedCategory,
    mailData: store.data
  };
};

const mapActionToProps = {
    setMailData: dataActions.setMailData,
    toggleRead: dataActions.toggleRead,
    markAsDelete: dataActions.markAsDelete
};

export default connect(mapStateToProps, mapActionToProps)(Content);