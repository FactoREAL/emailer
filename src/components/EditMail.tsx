import * as React from 'react';
import { IMail } from 'src/types';
import { bindActionCreators, Dispatch } from 'redux';
import { editMailRequest } from 'src/api/mails';
import { connect } from 'react-redux';
import { toggleEdit } from 'src/actions/mails';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    editMail: bindActionCreators(editMailRequest, dispatch),
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
  };
}

type Props = {
  mail: IMail,
  editMail: (id: number, mail: IMail, token: string) => void,
  toggleEdit: (id: number) => void,
};

class EditMail extends React.Component<Props> {
  state = {
    token: localStorage.getItem('token') || '',
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
    this.props.editMail(this.props.mail.id, mail, this.state.token);
  }
  handleCancel   = (e: React.FormEvent<HTMLButtonElement>) => {
    this.props.toggleEdit(this.props.mail.id);
  }
}

export default connect(null, mapDispatchToProps)(EditMail);
