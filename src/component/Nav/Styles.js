import React from 'react'

const styles = {
    nav:{
        marginRight: 0, 
        marginLeft: 0,
        display: 'flex', 
        alignItems: 'center',
        minWidth: 'max-content',
        position: 'sticky',
        zIndex: 101
    },
    logo:{
        width: 80
    },
    menus:{
        marginLeft: 0, 
        marginRight: 0, 
        padding: 0, 
        flexShrink: 0
    },
    searchContainer:{
        marginLeft: 10, 
        marginRight: 7, 
        padding: 0, 
        flexGrow: 1,
        minWidth: '18rem'
    },
    searchBox:{
        width: 100+'%'
    },
    signup:{
        background: '#E3848C',
        color: 'white',
        borderRadius: '5px 0 0 5px',
        marginLeft: 3,
        marginRight: 3
    },
    login:{
        background: 'white',
        color: '#E84855',
        borderRadius: '0 5px 5px 0',
        marginLeft: 3,
        marginRight: 3  
    },
}

export default styles