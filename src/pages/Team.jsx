import { Link } from 'react-router-dom';
import { agents } from '../data/agents';

function Team() {
  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-script text-3xl text-coral-deep mb-2">The People Behind Room for Wonder</p>
      <h1 className="font-display text-5xl text-ink mb-12">Meet the Team</h1>
      <p className="font-body text-lg text-ink mb-12"> Great vacations start with someone who takes the time to understand what matters to you. Meet the Room for Wonder travel agents who bring personal experience, thoughtful planning, and genuine care to every vacation we help create.</p>

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
            <p className="font-body text-sm text-ink mb-3">{agent.specialty}</p>

            <Link
              to={`/request-a-quote?agent=${agent.id}`}
              className="font-body text-sm text-coral-deep underline"
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