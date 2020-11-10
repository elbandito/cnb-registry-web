import React from 'react';
import { Card } from 'react-bootstrap';
import { Buildpack } from './Buildpack';
import "./Item.scss";


export const Item: React.FC<ItemProps> = (props: ItemProps) => {
    return (
        <Card className="Buildpack-Item shadow-sm mb-3">
            <Card.Body className="text-left">
                <div className="mb-2">
                    <span className="Buildpack-Name">{props.buildpack.name}</span>
                    <span className="Buildpack-Version font-italic text-muted pl-2">{props.buildpack.version}</span>
                </div>
                <div className="d-flex">
                    <div className="Buildpack-Namespace">{props.buildpack.ns}</div>
                    <div className="Buildpack-Updated ml-auto font-italic text-muted">updated 3 days ago</div>
                </div>
            </Card.Body>
        </Card>
    );
}

interface ItemProps {
    buildpack: Buildpack
}