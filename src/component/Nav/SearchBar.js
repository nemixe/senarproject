import React from 'react'
import { Input, Button } from 'semantic-ui-react'

class SearchBar extends React.Component{
    render(props){
        return <Input fluid action={<Button style={{background: '#E84855', color: 'white'}} content='Cari'/>} placeholder={this.props.placeHolder} />
    }
}
export default SearchBar