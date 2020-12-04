import Centered from '../../Styled/Centered';
import Loader from 'react-loader-spinner';
import React from 'react';

function PageLoader() {
    return (
        <Centered>
            <Loader type="Puff" color="#7D4CDB" />
        </Centered>
    );
}

export default PageLoader;
