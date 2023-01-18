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
      <Image src={tinchel} alt="aa" className="round-circle" />
      <div className="left-of-img">
        {info.map((elem) => {
          return (
            <div>
              <h3>Name : {elem.name}</h3>
              <h3>Email : {elem.Email}</h3>
              <h3>Phone : {elem.Phone}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Me;
