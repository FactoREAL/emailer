import * as React from 'react';
import { IMail } from 'src/types';
import Mail from 'src/components/Mail';
import AddMailForm from 'src/components/AddMailForm';
import EditMail from 'src/components/EditMail';

type Props = {
  match: any,
  mails: IMail[],
};

class MailList extends React.Component<Props> {
  state = {
    token: localStorage.getItem('token') || '',
  };
  render() {
    const { id: activeFolder } = this.props.match.params;
    const activeMails          = this.props.mails.filter(mail => +mail.folder_id === +activeFolder);
    return (
      <div className="col-8">
        <ul className="list-group list-group-flush">
          {activeMails.map(mail => ((!mail.edit)
            ? <Mail key={mail.id} mail={mail}/>
            : <EditMail key={mail.id} mail={mail}/>))}
        </ul>
        {this.props.children}
        <AddMailForm activeFolder={activeFolder}/>
      </div>
    );
  }
}

export default MailList;
