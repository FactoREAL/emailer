import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { editMailRequest, toggleEdit } from 'src/actions/mails';
import { IMail } from 'src/reducers/mails';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    editMailRequest: bindActionCreators(editMailRequest, dispatch),
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  mail: IMail,
} & MappedDispatch;

type State = {
  title: string,
  body: string,
};

class EditMail extends React.Component<Props, State> {
  state = {
    title: this.props.mail.title,
    body: this.props.mail.body,
  };
  render() {
    return (
      <li className="list-group-item list-group-item-info">
        <div className="row">
          <div className="col-10 form-group">
            <input
              className="form-control"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <input
              className="form-control"
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </div>
          <div className="col-2 d-flex justify-content-center">
            <button
              className="btn btn-sm btn-primary mx-1"
              onClick={this.handleSaveEdit}
            >
              сохранить
            </button>
            <button
              className="btn btn-sm btn-secondary mx-1"
              onClick={this.handleCancel}
            >
              отмена
            </button>
          </div>
        </div>
      </li>
    );
  }
  handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      title: e.currentTarget.value,
    });
  }
  handleBodyChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      body: e.currentTarget.value,
    });
  }
  handleSaveEdit = (e: React.FormEvent<HTMLButtonElement>) => {
    const mail = {
      id: this.props.mail.id,
      title: this.state.title,
      body: this.state.body,
      folder_id: this.props.mail.folder_id,
      edit: false,
    };
    this.props.editMailRequest(this.props.mail.id, mail);
  }
  handleCancel   = (e: React.FormEvent<HTMLButtonElement>) => {
    this.props.toggleEdit(this.props.mail.id);
  }
}

export default connect(null, mapDispatchToProps)(EditMail);
