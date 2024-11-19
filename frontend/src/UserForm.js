import { Button, Grid2, Input, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const UserForm = (props) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if(!props.subimittedprop){
            setId(0);
            setName('');
        }
    }, [props.subimittedprop]);

    useEffect(() => {
            if(props.selectedUserDataprop?.id && props.selectedUserDataprop.id !== 0){
                setId(props.selectedUserDataprop.id);
                setName(props.selectedUserDataprop.name);
            }
    }, [props.selectedUserDataprop]);





    return(
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >

            <Grid2 item xs={12}>
                <Typography component={'h1'} sx = {{ color: '#000000'}}> User Form</Typography>
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography
                    component={'lable'}
                    htmlfor='id'
                    sx={{ 
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '20px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <Input 
                    type="number"
                    id='id'
                    name="id"
                    sx={{width: '300px'}}
                    value={id}
                    onChange={e => setId(e.target.value)}

                />
            </Grid2>



            <Grid2 item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography
                    component={'lable'}
                    htmlfor='id'
                    sx={{ 
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '20px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <Input 
                    type="text"
                    id='name'
                    name="name"
                    sx={{width: '300px'}}
                    value={name}
                    onChange={e => setName(e.target.value)}

                />
            </Grid2>


            <Button
                sx={{
                    margin: 'auto',
                    arginBottom: '20px',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    marginLeft: '20px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: 0.7,
                        backgroundColor: '#000000',
                    }
                }}
                onClick={() => props.isEditprop? props.updateUserprop({id, name}) : props.adduserprop({id, name})}
            >
                {props.isEditprop ? 'Update User' : 'Add User'}
            </Button>
            
        </Grid2>
    );
}

export default UserForm;