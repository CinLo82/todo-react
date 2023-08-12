import { useState, useEffect} from 'react'


function useLocalStorage(itemName, initialValue) {
  const [sincronizeditem, setSincronizedItem] = useState(true)
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
    
        let parsedItem
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
      setLoading(false) 
      setSincronizedItem(true)
      } catch(error) {
        setError(true)
      }
      
    }, 2000)
  },[sincronizeditem])
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return { 
    item, 
    saveItem, 
    loading, 
    error, 
    sincronizeItem 
  }
}
 
  export { useLocalStorage }