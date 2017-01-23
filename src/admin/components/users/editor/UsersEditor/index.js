import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';
import ProfileEditor from 'src/admin/containers/users/editor/ProfileEditor';
import CardEditor from 'src/admin/containers/users/editor/CardEditor';


export default props => {
  let {
    user,
    card,
    save
    } = props;

  let tabStyle = {
    backgroundColor: '#29B6F6',
    color: 'white'
  };

  return (
    <BaseLayout>
      <Tabs>
        <Tab style={tabStyle} label="Профиль" value="profile" >
          <ProfileEditor />
        </Tab>
        { !user.isAdmin ?
          <Tab style={tabStyle} label="Карточка" value="card">
            <CardEditor />
          </Tab>
          : null
        }
      </Tabs>
      <br/>
      <RaisedButton
        label="Сохранить"
        primary={true}
        onClick={() => save({ user, card })}
      />
    </BaseLayout>
  );
};
