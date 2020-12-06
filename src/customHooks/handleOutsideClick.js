import * as React from 'react';

const useHandleOutsideClick = handleOutsideClick => {
    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleOutsideClick]);
};

export default useHandleOutsideClick;
