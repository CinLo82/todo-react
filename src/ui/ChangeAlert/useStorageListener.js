import { useState } from "react"

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log("STORAGE CHANGE")
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        sincronize()
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow: toggleShow
    }
}

export { useStorageListener }