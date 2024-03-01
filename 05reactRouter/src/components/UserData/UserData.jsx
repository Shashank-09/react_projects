const UserData  = ({data}) => {
    return (
        <>
          {data.map(user => {
            return (
                <tr key={user.id}> 
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
            )
          })}
        </>
    )
}

export default UserData;