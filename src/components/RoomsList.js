import React from "react";
import Room from "./Room";
//import RoomContainer from "./RoomContainer";

const RoomsList = (props) => {
  const { rooms } = props;
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        unfortunately no rooms matched on your search parameters
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
