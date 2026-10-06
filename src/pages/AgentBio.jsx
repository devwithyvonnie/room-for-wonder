import { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { agents } from "../data/agents";
import Button from "../components/ui/Buttons";

function AgentBio() {
  const { agentId } = useParams();
  const agent = agents.find((a) => a.id === agentId);

  useEffect(() => {
    if (agent) {
      document.title = `${agent.name} | Room for Wonder`;
    }
  }, [agent]);

  if (!agent) {
    return (
      <div className="px-8 py-20 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-3xl text-ink mb-4">Agent not found</h1>
        <Link to="/team" className="text-coral-deep underline">
          Back to Meet the Team
        </Link>
      </div>
    );
  }

  return (
    <div className="px-8 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <img
          src={agent.bioPhoto}
          alt={`Portrait of ${agent.name}`}
          className="w-full max-h-[500px] object-cover rounded-3xl"
        />
        <div>
          <h1 className="font-display text-4xl text-plum mb-1">{agent.name}</h1>
          <p className="font-script text-3xl text-coral-deep mb-6">{agent.role}</p>
          
          {agent.bio.map((paragraph, i) => (
            <p key={i} className="font-body text-ink mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-plum rounded-3xl px-8 py-12 text-center">
        <h2 className="font-display text-3xl text-offwhite mb-6">
          Ready to start planning with {agent.name.split(" ")[0]}?
        </h2>
        <Link to={`/request-a-quote?agent=${agent.id}`}>
          <Button variant="primary">Request a Quote</Button>
        </Link>
      </div>
    </div>
  );
}

export default AgentBio;
