import PropTypes from 'prop-types';

import  { Component } from 'react';
import { Bar,SearchForm ,Button,Input} from './Searchbar.styled';

export class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Bar>
      <SearchForm onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Button type="submit">Искать</Button>
      </SearchForm>
      </Bar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
  }