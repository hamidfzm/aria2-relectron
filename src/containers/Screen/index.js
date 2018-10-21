import React, {Component} from 'react';

import ScreenComponent from '../../components/Screen';
import Main from '../../components/Main';
import List from '../../components/List';
import AddButton from '../../components/AddButton';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

class Screen extends Component {
    render() {
        return (
            <ScreenComponent>
                <AppBar/>
                <Drawer/>
                <Main>
                    <List/>
                    <AddButton/>
                </Main>
            </ScreenComponent>
        );
    }
}

export default Screen;
