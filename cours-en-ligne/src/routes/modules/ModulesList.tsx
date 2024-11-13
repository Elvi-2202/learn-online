import React from 'react';
import { useGetModulesQuery } from '../../api/endpoints/modules';

interface Module {
  id: string;
  title: string;
  description: string;
}

const ModulesList: React.FC = () => {
  const { data: modules, isLoading, isError } = useGetModulesQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading modules</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {modules?.map((module: Module) => (
        <div key={module.id} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{module.title}</h3>
          <p>{module.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ModulesList;