import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { delMailRequest, toggleEdit } from 'src/actions/mails';
import { IMail } from 'src/reducers/mails';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    delMailRequest: bindActionCreators(delMailRequest, dispatch),
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  mail: IMail,
} & MappedDispatch;

class Mail extends React.Component<Props> {
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
    this.props.delMailRequest(this.props.mail.id);
  }
}

export default connect(null, mapDispatchToProps)(Mail);
