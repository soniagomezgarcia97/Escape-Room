import { useState } from "react";

export const useAuth = () => {
    const [userId] = useState(() => localStorage.getItem('userId'))
    const [username] = useState(() => localStorage.getItem('username'))

    /* Eliminar user */
    const logout = () => {
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
    }

    return { userId, username, logout }
}