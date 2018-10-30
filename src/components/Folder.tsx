import * as React from 'react';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delFolderRequest, toggleEdit } from 'src/actions/folders';
import { IFolder } from 'src/reducers/folders';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleEdit: bindActionCreators(toggleEdit, dispatch),
    delFolderRequest: bindActionCreators(delFolderRequest, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  folder: IFolder,
  activeFolder: number,
} & MappedDispatch;

type State = {
  id: number,
};

class Folder extends React.Component<Props, State> {
  state = {
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
  deleteFolder = () => this.props.delFolderRequest(this.props.folder.id);
  handleEdit   = () => this.props.toggleEdit(this.props.folder.id);
}

export default compose(
  connect(null, mapDispatchToProps),
)(Folder);
