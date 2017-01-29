import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { withRouter } from 'react-router';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';
import ProfileEditor from 'src/admin/containers/users/editor/ProfileEditor';
import CardEditor from 'src/admin/containers/users/editor/CardEditor';


let UsersEditor = props => {
  let {
    user,
    saveUser,
    saveCard,
    activeTab,
    changeTab,
    goToOverview,
    params: {
      userId
      }
    } = props;

  let isNewUser = !Boolean(userId);
  let showCard = !(isNewUser || user.isAdmin);

  let tabStyle = {
    backgroundColor: '#29B6F6',
    color: 'white'
  };

  let saves = {
    profile: saveUser,
    card: saveCard
  }
  let handleSave = saves[activeTab];

  return (
    <BaseLayout>
      <Tabs
        onChange={changeTab}
        value={activeTab}>
        <Tab
          style={tabStyle}
          label="Профиль"
          value="profile" >
          <ProfileEditor />
        </Tab>
        { showCard ?
          <Tab
            style={tabStyle}
            label="Карточка"
            value="card">
            <CardEditor />
          </Tab>
          : null
        }
      </Tabs>
      <br/>
      <RaisedButton
        label="Сохранить"
        primary={true}
        onClick={handleSave}
        className="action-button"
      />
      <RaisedButton
        label="Назад"
        secondary={true}
        onClick={goToOverview}
        className="action-button"
      />
    </BaseLayout>
  );
};

export default withRouter(UsersEditor);
