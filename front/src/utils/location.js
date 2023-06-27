import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

let previousLocation = {}
export const setLocationHistory = location => {
    previousLocation = location
}

export const getLocationHistory = () => {
    return previousLocation
}

export const LocationHistory = () => {
    const history = useHistory()

    useEffect(() => {
        const unlisten = history.listen(location => {
            previousLocation = location
        })

        return () => {
            unlisten()
        }
    }, [history])

    return null
}
