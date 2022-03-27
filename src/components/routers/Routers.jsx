import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddContact from '../pages/AddContact'
import ContactList from '../pages/ContactList'
import EditContact from '../pages/EditContact'
import ViewContact from '../pages/ViewContact'
import Testing from '../pages/Testing';
import NewsLetter from '../pages/NewsLetter'
import Styled from '../styled/Styled';

const Routers = () => {
    return (
        <>
            <Switch>
                <Route exact path="/style/" component={Styled} />
                <Route exact path="/contact-list/" component={ContactList} />
                <Route exact path="/contact-list/add" component={AddContact} />
                <Route exact path="/contact-list/edit/:id" component={EditContact} />
                <Route exact path="/contact-list/view/:viewid" component={ViewContact}/>
                <Route exact path="/news" component={NewsLetter}/>
                <Route exact path="/testing" component={Testing}/>
            </Switch>
        </>
    )
}

export default Routers
