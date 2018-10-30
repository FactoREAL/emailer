import * as React from 'react';
import FolderList from 'src/components/FolderList';
import { Route } from 'react-router';
import MailList from 'src/components/MailList';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import WithLoading from 'src/components/WithLoading';
import { IRootState } from 'src/reducers/rootReducer';
import { fetchFolders } from 'src/actions/folders';
import { fetchMails } from 'src/actions/mails';

function mapStateToProps(state: IRootState) {
  return {
    folders: state.folders,
    mails: state.mails,
  };
}
type MappedState = ReturnType<typeof mapStateToProps>;

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchFolders: bindActionCreators(fetchFolders, dispatch),
    fetchMails: bindActionCreators(fetchMails, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  match: any,
} & MappedState
  & MappedDispatch;

class Emailer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchFolders();
    this.props.fetchMails();
  }

  render() {
    const { id: folderId } = this.props.match.params || { id: -1 };
    const WithLoadingFolderList = WithLoading(FolderList);
    const WithLoadingMailList = WithLoading(MailList);
    return (
      <div className="row container-fluid">
        <WithLoadingFolderList
          isLoading={this.props.folders.loading}
          activeFolder={folderId}
          folders={this.props.folders.data}
        />
        <Route
          path="/folders/:id"
          render={(props:any) => <WithLoadingMailList
            isLoading={this.props.mails.loading}
            mails={this.props.mails.data}
            {...props}
          />}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emailer);
