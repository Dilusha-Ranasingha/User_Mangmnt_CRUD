import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTable = (props) => {
    return(
        <TableContainer component={Paper}>
            <table>

                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        props.rows.length > 0 ? props.rows.map( row => (
                                <TableRow key={row.id}>
                                    <TableCell component='th'> {row.id} </TableCell>
                                    <TableCell component='th'> {row.name} </TableCell>
                                    <TableCell > 
                                        <button
                                            sx={{
                                                backgroundColor: '#4CAF50',
                                                color: 'white',
                                                padding: '10px 15px',
                                                border: 'none',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                margin: '5px',
                                            }}
                                            onClick={()=> props.selectedUserprop({id: row.id, name: row.name})}
                                        > 
                                        Edit 
                                        </button>

                                        <button
                                            sx={{
                                                backgroundColor: '#f44336',
                                                color: 'white',
                                                padding: '10px 15px',
                                                border: 'none',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                margin: '5px',
                                            }}
                                            onClick={()=>props.deleteUserprop({id: row.id})}
                                        > 
                                        Delete 
                                        </button>


                                    </TableCell>
                                </TableRow>
                            )
                        ) : ( 
                            <TableRow>
                                <TableCell> No data found </TableCell>
                            </TableRow> 
                            )
                    }
                </TableBody>



            </table>

        </TableContainer>
    );

}

export default UserTable;