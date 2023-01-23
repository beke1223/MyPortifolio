import tinchel from "../img/tinchel.png";
import Image from "react-bootstrap/Image";

var info = [
  {
    name: "Tinchel",
    Email: "Tinchel@gmail.com",
    Phone: +251935488958,
  },
];

function Me() {
  return (
    <div>
      <hr className="horLine" />
      <figute className="swing">
        <Image src={tinchel} alt="aa" className="round-circle pImage" />
      </figute>

      <div className="left-of-img">
        {info.map((elem) => {
          return (
            <div className="info-group">
              <h3 className="name">Name : {elem.name}</h3>
              <h3 className="email">Email : {elem.Email}</h3>
              <h3 className="phone">Phone : {elem.Phone}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Me;
