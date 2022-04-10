import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import { PaperCustom } from '../atoms/PaperCustom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const AdministratorArea = ({handle,admins}) => {
    const [limit, setLimit] = useState(5);
    const handleLimit = () => { 
        setLimit(limit+5);
    }
    const handleLess = () => { 
        setLimit(5);
    }

    const handleViewMore = () => {
        let count = 0;
        if(admins?.length > 0 ){
            return (
                admins?.map((admin) => {
                    count++;
                    if(count < limit){ 
                        return (
                            <PaperCustom
                                key = {admin.id}
                                id = { admin.id }
                                handle = { handle }
                                firstName = { admin.firstName }
                                lastName = { admin.lastName }
                                color = { admin.color }
                            />)
                    }else if(limit === count){
                        return (
                            <div className = 'btn-view-more' key = {`fab-${count}`}>
                                <Fab className = 'btn-view-more-fab' aria-label="add" sx={{bgcolor:'#406d96'}}
                                    onClick = {handleLimit}
                                >
                                    <MoreHorizIcon />
                                </Fab>
                            </div>
                        );
                    }else{
                        return null;
                    }
                })
            )
        }
      
    }
    

    return (
    <div>
        <h1 className="admin-title mt-10 mb-5">{admins?.length <= 1? 'Administrator':'Administrators'}</h1>
        <div className="admin-generator-papers" >
            {handleViewMore()}
        </div>
    </div>

    )
}
