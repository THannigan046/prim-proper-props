function GuestList({list}){
    return(
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Kid's Meal</th>
            </tr>
        </thead>
        <tbody>
            {list.map(guest => (
                <tr key={guest.id}>
                    <td>{guest.name}</td>
                    <td>{String(guest.kidsMeal)}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default GuestList;