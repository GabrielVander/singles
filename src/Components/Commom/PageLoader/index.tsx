import Centered from '../../Styled/Centered';
import Loader from 'react-loader-spinner';
import React, {ReactElement} from 'react';

function PageLoader(): ReactElement {
    return (
        <Centered>
            <Loader type="Puff" color="#7D4CDB"/>
        </Centered>
    );
}

export default PageLoader;
