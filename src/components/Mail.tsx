import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteMailRequest } from 'src/api/mails';
import { connect } from 'react-redux';
import { toggleEdit } from 'src/actions/mails';
import { IMail } from 'src/reducers/mails';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    deleteMail: bindActionCreators(deleteMailRequest, dispatch),
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  mail: IMail,
} & MappedDispatch;

type State = {
  token: string,
};

class Mail extends React.Component<Props, State> {
  state = {
    token: localStorage.getItem('token') || '',
  };
  render() {
    const { mail } = this.props;
    return (
      <li className="list-group-item list-group-item-info">
        <div className="row">
          <div className="col-10">
            <h5>{mail.title}</h5>
            <span>{mail.body}</span>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <button
              className="btn btn-sm btn-warning mx-1"
              onClick={this.handleEdit}
            >
              ред.
            </button>
            <button
              className="btn btn-sm btn-danger mx-1"
              onClick={this.handleDelete}
            >
              удалить
            </button>
          </div>
        </div>
      </li>
    );
  }
  handleEdit = () => {
    this.props.toggleEdit(this.props.mail.id);
  }
  handleDelete = () => {
    this.props.deleteMail(this.props.mail.id, this.state.token);
  }
}

export default connect(null, mapDispatchToProps)(Mail);
