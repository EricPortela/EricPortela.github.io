import './WorkPage.scss';
import Menu from '../components/general-components/Menu'
import SpeedDial from '../components/general-components/SpeedDial'
import Toggle from '../components/general-components/Toggle'
import HeroCell from '../components/work-page/HeroCell';
import ProjectCell from '../components/work-page/ProjectCell';
import ProjectCells from '../components/work-page/ProjectCells';


function WorkPage() {
  return (
    <div className="WorkPage">
      <Menu></Menu>
      <HeroCell></HeroCell>
      <Toggle></Toggle>
      <ProjectCells></ProjectCells>
      <SpeedDial></SpeedDial>
    </div>
  );
}

export default WorkPage;
