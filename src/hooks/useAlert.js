import { useState } from 'react'

const useAlert = () => {
    const [Alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    const showAlert = ({ text, type = 'danger', show = true }) => setAlert({
        show: true,
        text,
        type
    });

    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    });
    return {
        Alert,
        showAlert,
        hideAlert
    }
}

export default useAlert
