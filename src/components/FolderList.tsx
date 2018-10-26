import * as React from 'react';
import AddFolderForm from 'src/components/AddFolderForm';
import Folder from 'src/components/Folder';
import EditFolder from 'src/components/EditFolder';
import { IFolder } from 'src/reducers/folders';

type Props = {
  folders: IFolder[],
  activeFolder: number,
};

class FolderList extends React.Component<Props> {
  render() {
    const { folders } = this.props;
    return (
      <div className="col-3">
        <ul className="list-group">
          {folders.map(folder => {
            return !folder.edit ? <Folder
              key={folder.id}
              folder={folder}
              activeFolder={this.props.activeFolder}
            /> : <EditFolder
              key={folder.id}
              folder={folder}
            />;
          },
          )}
        </ul>
        {this.props.children}
        <AddFolderForm/>
      </div>
    );
  }
}

export default FolderList;
