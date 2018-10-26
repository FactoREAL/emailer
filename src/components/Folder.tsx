import * as React from 'react';
import { IFolder } from 'src/types';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { deleteFolderRequest } from 'src/api/folders';
import { connect } from 'react-redux';
import { toggleEdit } from 'src/actions/folders';
import { Link } from 'react-router-dom';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
    deleteFolder: bindActionCreators(deleteFolderRequest, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  folder: IFolder,
  activeFolder: number,
} & MappedDispatch;

type State = {
  token: string,
  id: number,
};

class Folder extends React.Component<Props, State> {
  state = {
    token: localStorage.getItem('token') || '',
    id: this.props.folder.id,
  };
  render() {
    const { folder } = this.props;
    const css = (folder.id === +this.props.activeFolder)
      ? 'list-group-item list-group-item-action active'
      : 'list-group-item list-group-item-action';
    return (
      <Link to={`/folders/${this.props.folder.id}`} >
        <li className={css}>
          {folder.name}
          <button
            className="btn btn-sm btn-danger mx-1 float-right"
            onClick={this.deleteFolder}
          >
            удалить
          </button>
          <button
            className="btn btn-sm btn-warning mx-1 float-right"
            onClick={this.handleEdit}
          >
            ред.
          </button>
        </li>
      </Link>
    );
  }
  deleteFolder = () => this.props.deleteFolder(this.state.id, this.state.token);
  handleEdit   = () => this.props.toggleEdit(this.props.folder.id);
}

export default compose(
  connect(null, mapDispatchToProps),
)(Folder);
