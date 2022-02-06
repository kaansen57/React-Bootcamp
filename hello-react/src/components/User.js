import PropTypes from "prop-types";

// function User(props) {
function User({ name, surname, isLoggedIn, age, friends, adress }) {
  /* destructuring ile propsları alabiliriz*/
  // console.log(props);
  return (
    <>
      {/* <h1> Hoşgeldin {props.name} </h1> */}
      <h1> {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapınız"} </h1>
      {/* {friends.map((friend, index) => ( 
        <div key={index}>{friend}</div>
      ))} */}
      {adress.title} {adress.zip}
      <br />
      <ul>
        {friends
          ? friends.map((friend) => {
              return (
                <li key={friend.id}>
                  {friend.id} - {friend.name}
                </li>
              );
            })
          : "Data not found"}
      </ul>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isLoggedIn: PropTypes.bool,
    friends: PropTypes.array.isRequired,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
  })
};

User.defaultProps = {
    name : 'User'
}
export default User;
