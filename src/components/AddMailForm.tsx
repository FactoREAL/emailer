import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addMailRequest } from 'src/actions/mails';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addMailRequest: bindActionCreators(addMailRequest, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {
  activeFolder: number,
} & MappedDispatch;

type State = {
  title: string,
  body: string,
};

class AddMailForm extends React.Component<Props, State> {
  state = {
    title: '',
    body: '',
  };
  render() {
    return (
      <form className="form-inline mt-3 d-flex justify-content-center">
        <div className="form-group">
          <input
            size={30}
            className="form-control mx-2"
            type="text"
            name="title"
            placeholder="заголовок"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            size={60}
            className="form-control mx-2"
            type="text"
            name="body"
            placeholder="тело"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
          <button className="btn btn-primary mx-2" onClick={this.handleSubmit}>Добавить</button>
        </div>
      </form>
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
  handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.saveAdd();
    }
  }
  handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.saveAdd();
  }
  saveAdd = () => {
    const mail = {
      title: this.state.title,
      body: this.state.body,
      folder_id: +this.props.activeFolder,
      id: 10,
      edit: false,
    };
    if (this.state.title && this.state.body) {
      this.props.addMailRequest(mail);
      this.setState({
        title: '',
        body: '',
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(AddMailForm);
