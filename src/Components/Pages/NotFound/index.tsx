import React from "react";
import {Button, Result} from "antd";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {HOME} from "../../../Routes/AppRoutes";

function NotFound() {
    const {t} = useTranslation(['notFound']);

    return (
        <Result
            status="404"
            title="404"
            subTitle={t('notFound:subtitle')}
            extra={
                <Button type="primary">
                    <Link to={HOME.path}>
                        {t('notFound:home')}
                    </Link>
                </Button>
            }
        />
    );
}

export default NotFound;
