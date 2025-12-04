// /src/routes/UserRoutes.jsx
import { Route } from "react-router-dom";
import UserLayout from "../layout/Layout_User";
import Dashboard_User from "../pages/user/Dashboard_User";
import Explore_User from "../pages/user/Explore_User";
import Destination_User from "../pages/user/Destination_User";
import Bookings_User from "../pages/user/Booking_User";
import Wishlist_User from "../pages/user/WishList_User";
import Guides_User from "../pages/user/Guides_User";
import Messages_User from "../pages/user/Messages_User";
import Bookmarks_User from "../pages/user/Bookmark_User";
import Profile_User from "../pages/user/Profile_User";

// Create placeholder components for other pages
const PlaceholderPage = ({ title }) => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold text-[var(--text-color)] mb-4">
      {title}
    </h1>
    <p className="text-lg text-[var(--muted-color)]">
      This page is coming soon!
    </p>
  </div>
);

const UserRoute = (
  <Route path="/user" element={<UserLayout />}>
    <Route index element={<Dashboard_User />} />
    <Route path="dashboard" element={<Dashboard_User />} />
    <Route path="explore" element={<Explore_User />} />
    <Route path="destination/:stateName" element={<Destination_User />} />
    <Route path="bookings" element={<Bookings_User />} />
    <Route path="wishlist" element={<Wishlist_User />} />
    <Route path="guides" element={<Guides_User />} />
    <Route path="messages" element={<Messages_User />} />
    <Route path="bookmarks" element={<Bookmarks_User />} />
    <Route path="profile" element={<Profile_User />} />
    <Route path="settings" element={<PlaceholderPage title="Settings" />} />
    <Route path="security" element={<PlaceholderPage title="Security" />} />
  </Route>
);

export default UserRoute;
