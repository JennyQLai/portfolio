
function ListGroup() {
    const items = [
        'Beijing',
        'Jiangxi',
        'Jingdezhen',
        'Leping',
        'Shangrao'
    ];

    return (<>
        <h1>Title</h1>
        <ul className="list-group">
            {items.map(item => 
            <li key = {item}>
                {item}
            </li>)}
        </ul>
    </>)
}
export default ListGroup;