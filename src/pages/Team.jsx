import { Link } from 'react-router-dom';
import { agents } from '../data/agents';

function Team() {
  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-script text-3xl text-coral mb-2">The People Behind the Magic</p>
      <h1 className="font-display text-5xl text-ink mb-12">Meet the Team</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {agents.map((agent) => (
          <div key={agent.id} className="text-center">
            <img
              src={agent.photo}
              alt={`Portrait of ${agent.name}`}
              className="w-full aspect-square object-cover rounded-3xl mb-4"
            />
            <h2 className="font-display text-xl text-ink">{agent.name}</h2>
            <p className="font-body text-sm text-plum mb-3">{agent.role}</p>
            <Link
              to={`/request-a-quote?agent=${agent.id}`}
              className="font-body text-sm text-coral underline"
            >
              Work with {agent.name.split(' ')[0]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;