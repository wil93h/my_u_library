import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import { PaperCustom } from '../atoms/PaperCustom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const UserArea = ({handle,students}) => {
  
  const [limit, setLimit] = useState(5);
  const handleLimit = () => { 
      setLimit(limit+5);
  }
  
  const handleViewMore = () => {
    let count = 0;
    if(students?.length > 0 ){
        return (
            students?.map((admin) => {
                count++;
                if(count < limit){ 
                    return (
                        <PaperCustom
                            key = {admin.id}
                            id = { admin.id }
                            handle = { handle }
                            firstName = { admin.firstName }
                            lastName = { admin.lastName }
                            color = { admin.color || "#FA8072"}
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
        <h1 className="admin-title mt-10 mb-5">{students?.length <= 1? 'Student':'Students'}</h1>
        <div className="admin-generator-papers" >
            {handleViewMore()}
        </div>
    </div>
    )
}
