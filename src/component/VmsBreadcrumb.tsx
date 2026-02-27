import { Breadcrumb } from 'antd';
import {Link, useLocation} from "react-router";
import * as React from "react";
import {theme} from "antd";

const VmsBreadcrumb: React.FC = () => {
    const { pathname } = useLocation();
    const {token: {marginLG}} = theme.useToken();
    const segments = pathname.split('/').filter(Boolean);

    const items = [
        { key: '/', title: <Link to="/">Accueil</Link> },
        ...segments.map((seg, idx) => {
            const path = '/' + segments.slice(0, idx + 1).join('/');
            const label = decodeURIComponent(seg)
                .replace(/-/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase());
            return {
                key: path,
                title: idx === segments.length - 1 ? label : <Link to={path}>{label}</Link>,
            };
        }),
    ];

    return <Breadcrumb style={{ margin: `${marginLG}px 0` }} items={items} />;
};

export default VmsBreadcrumb;