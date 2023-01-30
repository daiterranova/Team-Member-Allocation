/* import { useState } from "react"; */
import Teams from "./Teams";
import TeamMembers from "./TeamMembers";
/* What do you do the component employees? returns the html that is renderer in our app  */
const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              handleEmployeeCardClick={handleEmployeeCardClick}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
/* 
function handleEmployeeCardClick(event) {
    console.log("id:" + event.currentTarget.id);
    setEmployees((prev) => {
      
      // Buscamos al empleado por su id que obtenemos del evento
      const employee = prev.find(
        (item) => item.id === parseInt(event.currentTarget.id)
      );
      console.log(`item id:${item.id}, target:${event.currentTarget.id}`);
      // Si existe podemos continuar
      if (employee) {

        // Clonamos el estado previo para poder actualizarlo
        // ref: https://holycoders.com/javscript-copy-array/
        const clonePrev = prev.slice();
        // Obtenemos el index del empleado dentro del estado
        const employeeIndex = prev.findIndex((item) => item.id === employee.id);
        const employeeHasSelectedTeam = employee.teamName === selectedTeam;

        // Con el accedemos al objeto dentro del estado previo para actualizarlo
        clonePrev[employeeIndex] = {
          ...employee,
          teamName: employeeHasSelectedTeam ? "" : selectedTeam,
        };
        // Retornamos el estado actualizado
        return clonePrev;
      }

      // Si no existe retornamos el estado igual
      return prev;
    });
  }
*/
export default Employees;
