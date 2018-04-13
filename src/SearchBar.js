import React from 'react'
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component{
    render(props){
        return <Input action={{ type: 'submit', content: 'Go' }} placeholder={this.props.placeHolder} />
    }
}
export default SearchBar