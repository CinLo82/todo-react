import { useState } from "react"

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log("STORAGE CHANGE")
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        return( 
            <WrappedComponent 
                {...props}
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }