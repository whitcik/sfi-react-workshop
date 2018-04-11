import React from 'react';

class MailRow extends React.PureComponent {

  state = {
    collapsed: true
  }

  handleToggleExpand = () => {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  }

  markAsDelete = () => {
    this.props.markAsDelete(this.props.mail.id);
  }

  toggleRead = () => {
    this.props.toggleRead(this.props.mail.id);
  }

  getMailRowClasses () {
    return [
      'mail-row',
      this.state.collapsed ? 'mail-row--collapsed' : false,
      this.props.mail.read ? 'warning' : false
    ].filter(x => x).join(' ');
  }

  render() {
    const { mail, index } = this.props;

    return (
      <tr className={this.getMailRowClasses()} key={mail.id}>
          <td>{index}</td>        
          <td>{mail.from}</td>
          <td>{mail.subject}</td>
          <td  onClick={this.handleToggleExpand} className="mail-row__body">{mail.body}</td>          
          <td>{new Date(mail.date).toLocaleDateString('pl-PL')}</td>
          <td>
            <div className="btn-toolbar">
              <button onClick={this.markAsDelete} type="button" className="btn btn-group btn-xs btn-danger">
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
              </button>
              <button onClick={this.toggleRead} type="button" className="btn btn-group btn-xs btn-default">
                <span className={`glyphicon glyphicon-eye-${mail.read ? 'close' : 'open'}`} aria-hidden="true"></span>
              </button>
            </div>
          </td>
        </tr>
    );
  }
}

export default MailRow;