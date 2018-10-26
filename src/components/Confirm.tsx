import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { confirmRequest } from 'src/api/login';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    confirmRequest: bindActionCreators(confirmRequest, dispatch),
  };
}
type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

type Props = {} & MappedDispatch;

type State = {
  code: string,
};

class Confirm extends React.Component<Props, State> {
  state = {
    code: '',
  };

  render() {
    return (
      <form className="form-inline d-flex justify-content-center">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="confirm"
            name="code"
            placeholder="код подтверждения"
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary form-control mx-2"
            onClick={this.handleSubmit}
          >
            OK
          </button>
        </div>
      </form>
    );
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      code: e.currentTarget.value,
    });
  }
  handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.confirmRequest(this.state.code);
  }
}

export default connect(null, mapDispatchToProps)(Confirm);
