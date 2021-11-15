import React,{ useState } from 'react'

import FileUpload from './FileUpload'
import ListingReport from './ListingReport'

const FileContainer = (props) => {
    const [ userData, setUserData ] = useState([])

    const addUserData =(data) => {
        setUserData(data)
    }

    return (
        <>
            <FileUpload userData={userData} addUserData={addUserData}/><hr />
            { userData.length >= 1 && <ListingReport userData={userData} />}
        </>
    )
}

export default FileContainer