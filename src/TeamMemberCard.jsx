import femaleProfile from "./images/femaleProfile.jpeg";
import maleProfile from "./images/maleProfile.jpeg";

const TeamMemberCard = ({
  employee,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam
          ? "card m-2 border-3 border-dark shadow"
          : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}>
      <img
        src={employee.gender === "male" ? maleProfile : femaleProfile}
        className="card-img-top "
      />
      <div className="card-body text-center">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: </b>
          {employee.designation}
        </p>
      </div>
    </div>
  );
};
export default TeamMemberCard;
