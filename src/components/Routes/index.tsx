import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import ActivityList from "../../pages/ActivityList";
import AddChild from "../../pages/AddChild";
import ChildList from "../../pages/ChildList";
import CallScreen from "../../pages/CallScreen";
import GroupList from "../../pages/GroupList";
import AddGroup from "../../pages/AddGroup";
import ScheduleCall from "../../pages/ScheduleCall";
import TeacherList from "../../pages/TeacherList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/activity/list" exact component={ActivityList} />
      <Route path="/child/add" exact component={AddChild} />
      <Route path="/child/list" exact component={ChildList} />
      <Route path="/call" exact component={CallScreen} />
      <Route path="/schedule-call" exact component={ScheduleCall} />
      <Route path="/group/list" exact component={GroupList} />
      <Route path="/group/add" exact component={AddGroup} />
      <Route path="/teacher/list" exact component={TeacherList} />
    </Switch>
  );
};

export default Routes;
