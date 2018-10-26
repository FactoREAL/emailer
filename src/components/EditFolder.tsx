import * as React from 'react';
import { IFolder } from 'src/types';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { editFolderRequest } from 'src/api/folders';
import { toggleEdit } from 'src/actions/folders';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    editFolder: bindActionCreators(editFolderRequest, dispatch),
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  folder: IFolder,
} & MappedDispatch;

type State = {
  token: string,
  name: string,
};

class EditFolder extends React.Component<Props, State> {
  state = {
    token: localStorage.getItem('token') || '',
    name: this.props.folder.name,
  };
  render() {
    return (
      <li className="list-group-item">
        <input
          value={this.state.name}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
        />
        <button
          className="btn btn-sm btn-secondary mx-1 float-right"
          onClick={this.cancelEdit}
        >
          отмена
        </button>
        <button
          className="btn btn-sm btn-primary mx-1 float-right"
          onClick={this.saveEdit}
        >
          сохранить
        </button>
      </li>
    );
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      name: e.currentTarget.value,
    });
  }
  handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.editFolder(this.props.folder.id, this.state.name, this.state.token);
    }
    // if (e.keyCode === 27) {
    //   this.cancelEdit();
    // }
  }
  saveEdit = () => {
    this.props.editFolder(this.props.folder.id, this.state.name, this.state.token);
  }
  cancelEdit = () => {
    this.props.toggleEdit(this.props.folder.id);
  }
}
export default connect(null, mapDispatchToProps)(EditFolder);
