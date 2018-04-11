import React from 'react';
import { connect } from 'react-redux';

import { setMailCategory } from '../../actions/viewActions';

import MailCategories from '../../constants/mailCategories';

import './header.css'; 

class Header extends React.Component {
  
  navigateToInbox = () => {
    this.props.setMailCategory(MailCategories.INBOX);
  }

  navigateToSent = () => {
    this.props.setMailCategory(MailCategories.SENT);
  }

  navigateToDeleted = () => {
    this.props.setMailCategory(MailCategories.DELETED);
  }

  getActiveClass (category) {
    const { selectedCategory } = this.props;

    return selectedCategory === category ? 'active' : null;
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#project">Web Mail</a>
            </div>
            <ul className="nav navbar-nav">
              <li className={this.getActiveClass(MailCategories.INBOX)} onClick={this.navigateToInbox}>
                <a href="#inbox">Odebrane</a>
              </li>
              <li className={this.getActiveClass(MailCategories.SENT)} onClick={this.navigateToSent}>
                <a href="#sent">Wysłane</a>
              </li>
              <li className={this.getActiveClass(MailCategories.DELETED)} onClick={this.navigateToDeleted}>
                <a href="#sent">Kosz</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(store) {
  return {
    selectedCategory: store.view.selectedCategory
  };
};

const mapActionToProps = {
  setMailCategory
};

export default connect(mapStateToProps, mapActionToProps)(Header);