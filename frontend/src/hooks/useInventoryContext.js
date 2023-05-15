import { InventoryContext } from "../context/InventoryContext"
import { useContext } from "react"

export const useInventoryContext = () => {
    const context = useContext(InventoryContext)

    if (!context) {
        throw Error('useInventoryContextt must be used inside an InventoryContextProvider')
    }

    return context
}