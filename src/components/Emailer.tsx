import * as React from 'react';
import FolderList from 'src/components/FolderList';
import { Route } from 'react-router';
import MailList from 'src/components/MailList';
import { loadFolders } from 'src/api/folders';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IFolder, IMail, IRootState } from 'src/types';
import WithLoading from 'src/components/WithLoading';
import { loadMails } from 'src/api/mails';
// import WithLoading from 'src/components/WithLoading';

function mapStateToProps(state: IRootState) {
  return {
    folders: state.folders,
    mails: state.mails,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loadFolders: bindActionCreators(loadFolders, dispatch),
    loadMails: bindActionCreators(loadMails, dispatch),
  };
}

type Props = {
  folders: IFolder[],
  mails: IMail[],
  match: any,
  loadFolders: (token: string, callback: any) => void,
  loadMails: (token: string, callback: any) => void,
};
type State = {
  token: string
  foldersLoading: boolean,
  mailsLoading: boolean,
};

class Emailer extends React.Component<Props, State> {
  state = {
    token: localStorage.getItem('token') || '',
    foldersLoading: (this.props.folders.length) ? false : true,
    mailsLoading: (this.props.mails.length) ? false : true,
  };
  componentDidMount() {
    this.props.loadFolders(this.state.token, this.endFoldersLoading);
    this.props.loadMails(this.state.token, this.endMailsLoading);
  }
  render() {
    const { id: folderId } = this.props.match.params || { id: -1 };
    const WithLoadingFolderList = WithLoading(FolderList);
    const WithLoadingMailList = WithLoading(MailList);
    return (
      <div className="row container-fluid">
        <WithLoadingFolderList
          isLoading={this.state.foldersLoading}
          activeFolder={folderId}
          folders={this.props.folders}
        />
        <Route
          path="/folders/:id"
          render={(props:any) => <WithLoadingMailList
            isLoading={this.state.mailsLoading}
            mails={this.props.mails}
            {...props}
          />}
        />
      </div>
    );
  }
  endFoldersLoading = () => {
    this.setState({
      foldersLoading: false,
    });
  }
  endMailsLoading = () => {
    this.setState({
      mailsLoading: false,
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emailer);
