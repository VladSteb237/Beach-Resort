import React from "react";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import { withRoomConsumer } from "../context";

function RoomContainer({ context }) {
  const { loading, rooms, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </React.Fragment>
  );
}
export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsList from "./RoomsList";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import { RoomConsumer } from "../context";

// function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         console.log(value);
//         const { loading, rooms, sortedRooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <h1>Room Container.</h1>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomContainer;
