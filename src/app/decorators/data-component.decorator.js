import { Component } from 'react';

const [ GET, POST, PATCH, PUT, DELETE ] = [ 'GET', 'POST', 'PATCH', 'PUT', 'DELETE']; 

const defaultParams = {
    method: GET,
    body: new FormData().append('json', JSON.stringify({}))
};

const DataComponent = ({url, params = defaultParams}) => 
    (ComposeComponent) => 
        class extends Component {

            constructor(props) {
                super(props);

                this.state = {
                    data: undefined,
                    isLoading: false,
                    error: null,
                };
            }
            
            componentWillMount() {
                this.setState({ isLoading: true });

                fetch(url, params)
                    .then(response => response.json())
                    .then(data => this.setState({data, isLoading: false}))
                    .catch( error => this.setState({error, isLoading: false,}));
            }

            render() {
                return (
                    <ComposeComponent { ...this.props } { ...this.state }/>
                );
            }
        }