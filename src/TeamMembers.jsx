import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      key={employee.id} // added to shut warning
      employee={employee}
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
    />
  ));
};
export default TeamMembers;
