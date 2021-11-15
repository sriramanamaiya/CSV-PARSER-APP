import React from 'react'

import FileContainer from './components/FileContainer'

const App = (props) => {

    return (
        <div className="conatiner">
            <h1 className="main-heading">File Upload + CSV parser</h1>
            <FileContainer />
        </div>
    )
}

export default App