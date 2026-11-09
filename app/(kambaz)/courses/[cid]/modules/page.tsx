"use client";
import { useParams } from "next/navigation";
import { FaPencilAlt, FaTrash, FaPlus } from "react-icons/fa";
import { useModulesStore } from "../../../store/modulesStore";
export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const { modules, addModule, updateModule, deleteModule } = useModulesStore();
  const selected = modules.filter((module) => module.course === cid);
  function add() {
    const name = window.prompt("Module name");
    if (!name?.trim()) return;
    addModule({ _id: `M${Date.now()}`, name: name.trim(),
      description: `${name.trim()} lessons`, course: cid, lessons: [] });
  }
  return <div id="wd-modules-container">
    <div className="wd-a3-toolbar"><h2>Modules</h2><div className="wd-a4-actions">
      <button className="wd-a3-btn secondary" type="button">Publish All</button>
      <button id="wd-add-module" className="wd-a3-btn" type="button" onClick={add}><FaPlus aria-hidden /> Module</button>
    </div></div>
    <ul id="wd-modules" className="wd-a3-modules">{selected.map((module) =>
      <li key={module._id} className="wd-a3-module" data-module-id={module._id}>
        <div className="wd-a4-module-heading"><h3>{module.name}</h3>
          <div className="wd-a4-module-actions">
            <button type="button" aria-label={`Edit ${module.name}`} title="Edit module" onClick={() => {
              const name = window.prompt("Edit module name", module.name);
              if (name?.trim()) updateModule({ ...module, name: name.trim() });
            }}><FaPencilAlt /></button>
            <button type="button" aria-label={`Delete ${module.name}`} title="Delete module" onClick={() => {
              if (window.confirm(`Delete module ${module.name}?`)) deleteModule(module._id);
            }}><FaTrash /></button>
          </div>
        </div>
        <ul>{module.lessons.map((lesson) => <li key={lesson._id}>{lesson.name}</li>)}</ul>
      </li>
    )}</ul>
    {selected.length === 0 && <p className="wd-a3-empty">No modules for this course.</p>}
  </div>;
}
