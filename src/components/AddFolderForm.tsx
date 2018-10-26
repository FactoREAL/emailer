import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addFolderRequest } from 'src/api/folders';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addFolder: bindActionCreators(addFolderRequest, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {}
& MappedDispatch;

type State = {
  token: string,
  name: string,
};

class AddFolderForm extends React.Component<Props, State> {
  state = {
    token: localStorage.getItem('token') || '',
    name: '',
  };
  render() {
    return(
      <form className="form-inline mt-3 d-flex justify-content-center">
        <div className="form-group">
          <input
            className="form-control mx-2"
            type="text"
            name="title"
            onChange={this.handleChange}
            onKeyPress={this.handleKeypress}
            value={this.state.name}
          />
          <button className="btn btn-primary mx-2" onClick={this.handleSubmit}>Добавить</button>
        </div>
      </form>
    );
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      name: e.currentTarget.value,
    });
  }
  handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addSave();
    }
  }
  handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.addSave();
  }
  addSave = () => {
    if (this.state.name) {
      this.props.addFolder(this.state.name, this.state.token);
      this.setState({ name: '' });
    }
  }
}

export default connect(null, mapDispatchToProps)(AddFolderForm);
