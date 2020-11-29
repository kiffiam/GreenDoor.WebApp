import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import NavMenu from "../components/common/NavMenu";
import AdminRooms from "./Admin/AdminRooms";
import RoomDetailedContainer from "../containers/RoomDetailedContainer";
import FeedPostContainer from "../containers/FeedPostContainer";
import Reviews from "../pages/Reviews";
import MyAccount from "../pages/User/MyAccount";
import AddRoom from "./Admin/AddRoom";
import AddReview from "./User/AddReview";
import EditRoom from "./Admin/EditRoom";
import AddFeedPost from "./Admin/AddFeedPost";
import MyReservations from "./User/MyReservations";
import NewReservations from "./Admin/NewReservations";
import UserList from "./Admin/UserList";
import Reservations from "./Admin/Reservations";
import Rooms from "./Rooms";
import Login from "./Login";
import Register from "./Register";


const Routes: React.SFC = () => {
  return (
    <Router>
      <Route path="/" component={NavMenu} />
      <Route exact path="/" component={FeedPostContainer} />
      <Route exact path="/Admin/Rooms" component={AdminRooms} />
      <Route path="/Admin/AddRoom" component={AddRoom} />
      <Route path="/Admin/Rooms/:id/Edit" component={EditRoom} />
      <Route path="/Admin/Reservations" component={Reservations} />
      <Route path="/Admin/Rooms/:id/AddReservations" component={NewReservations} />
      <Route path="/Admin/UserList" component={UserList} />
      <Route path="/Admin/AddFeedPost" component={AddFeedPost} />

      <Route path="/Reviews" component={Reviews} />
      <Route path="/MyAccount" component={MyAccount} />
      <Route path="/MyReservations" component={MyReservations} />
      <Route path="/HomePage" component={FeedPostContainer} />
      <Route exact path="/Rooms" component={Rooms} />
      <Route exact path="/Rooms/:id" component={RoomDetailedContainer} />
      <Route path="/Rooms/:id/AddReview" component={AddReview} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
    </Router>
  );
};
export default Routes;