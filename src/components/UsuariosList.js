import React from 'react';

function UsuariosList(props){
    console.log(props)
    return(
        <tr>
        <td>{props.user.id}</td>
        <td>{props.user.name}</td>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
        <td>{props.user.avatar}</ td>
        </tr>
    )
}
export default UsuariosList;