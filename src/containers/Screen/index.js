import React, {Component, Fragment} from 'react';

import {
    Open as OpenAria2,
    Close as CloseAria2
} from '../../aria2';
import ScreenComponent from '../../components/Screen';
import Main from '../../components/Main';
import List from '../../components/List';
import AddButton from '../AddButton';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

class Screen extends Component {
    componentDidMount() {
        OpenAria2()
            .then(() => console.log('open'))
            .catch(err => console.log('error', err));
    }

    componentWillUnmount() {
        CloseAria2()
            .then(() => console.log('closed'))
            .catch(err => console.log('error', err));
    }

    render() {
        return (
            <Fragment>
                <ScreenComponent>
                    <AppBar/>
                    <Drawer/>
                    <Main>
                        <List/>
                        <AddButton/>
                    </Main>
                </ScreenComponent>
            </Fragment>
        );
    }
}

export default Screen;
