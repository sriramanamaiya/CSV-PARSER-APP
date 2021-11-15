import React,{ useState } from 'react'

import Papa from 'papaparse'

const FileUpload = (props) => {
    const { addUserData } = props
    const [ file,setFile ] = useState({})
    const [ upload, setUpload ] = useState(false)

    const handleFileUpload = (e) => {
        if( e.target.files[0] === undefined ){
            setFile({})
        }else{
            setFile(e.target.files[0])
        }
    }

    const handleSubmit=(e) => {
        e.preventDefault()

        if( file.name === undefined ){
            setUpload(true)
            addUserData([])
        }else{
            Papa.parse(file, {
                header: true,
                dynamicTyping:true,
                complete: (results) => {
                    addUserData(results.data)
                }
            })
            setUpload(false)
        } 
    }

    return (
        <div className="fileupload">
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" accept=".csv" className="file-btn" onChange={handleFileUpload}/><br/><br/>
                <input type="submit" value="Upload" className="upload-btn" />
            </form><br />
            { upload && <h3>Please Upload CSV File</h3> }
        </div>
    )
}

export default FileUpload