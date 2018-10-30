import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { editFolderRequest, toggleEdit } from 'src/actions/folders';
import { IFolder } from 'src/reducers/folders';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    editFolderRequest: bindActionCreators(editFolderRequest, dispatch),
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  folder: IFolder,
} & MappedDispatch;

type State = {
  name: string,
};

class EditFolder extends React.Component<Props, State> {
  state = {
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
      this.props.editFolderRequest(this.props.folder.id, this.state.name);
    }
  }
  saveEdit = () => this.props.editFolderRequest(this.props.folder.id, this.state.name);
  cancelEdit = () => this.props.toggleEdit(this.props.folder.id);
}

export default connect(null, mapDispatchToProps)(EditFolder);
