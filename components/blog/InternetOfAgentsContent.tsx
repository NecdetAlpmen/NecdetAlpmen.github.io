export default function InternetOfAgentsContent() {
  return (
    <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
      <p>
        Recently, I made a deliberate decision: to step away from hardware-focused ventures. Because if
        building startups were a game, hardware would be the nightmare mode.
      </p>
      <p>
        This wasn’t a spontaneous move. It came from years of firsthand experience with the unique
        friction of building in hardware. In software, creating something once often means scaling it
        effortlessly. In hardware, replication can be harder than the invention itself. Manufacturing,
        logistics, supply chains… These layers compound complexity in ways that slow down innovation.
      </p>
      <p>
        With one exception: humanoid robotics. That’s a frontier I strongly believe holds
        transformative potential. But beyond that, I’ve made it a rule, even a promise to my close
        circle, to stay away from hardware.
      </p>
      <p>Instead, my attention has shifted to something far more fundamental: agents.</p>

      <h2 className="text-2xl font-bold text-gray-900 pt-4">
        What Agents Actually Are (and What They Are Not)
      </h2>
      <p>There’s a tendency to overcomplicate agents.</p>
      <p>
        At their core, they are not magical systems. They are not fully autonomous entities in the sci-fi
        sense. And they are not as complex as they are often portrayed.
      </p>
      <p>An agent is, fundamentally, a definition of behavior:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>what it can do</li>
        <li>under which conditions it acts</li>
        <li>which tools, data or functions it can access</li>
      </ul>
      <p>
        In practice, this often boils down to a structured set of instructions, something much simpler than
        most people expect.
      </p>
      <p>
        Yes, there are technical layers underneath: model selection, states, latency, reliability,
        orchestration… But these are implementation details, and they are rapidly becoming standardized.
      </p>
      <p>What matters more is not how agents are built, but what they enable.</p>

      <h2 className="text-2xl font-bold text-gray-900 pt-4">A Shift in the Nature of the Internet</h2>
      <p>We are witnessing a fundamental shift:</p>
      <blockquote className="border-l-4 border-primary-500 pl-6 py-1 my-6 italic text-gray-800">
        “The internet is no longer just a medium for humans.”
      </blockquote>
      <p>It is becoming a medium for agents.</p>
      <p>
        Within a few years, I believe agents will become the primary semantic consumers of the internet.
      </p>
      <p>Think about that.</p>
      <p>
        Today, nearly every human is connected to the internet, yet our ability to consume information is
        deeply constrained by time, attention, and cognition.
      </p>
      <p>Agents, on the other hand, are not constrained by the same limits.</p>
      <p>
        They can autonomously traverse, analyze, and synthesize vast amounts of information continuously, and
        at scale.
      </p>
      <p>This transforms the internet into something else entirely:</p>
      <p className="font-medium text-gray-900">
        A massive, living data center of human knowledge, now shifting from human consumption to machine-first
        access.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 pt-4">
        The Unanswered Question: What Should the Agent-Native Internet Look Like?
      </h2>
      <p>This shift raises a critical question:</p>
      <p className="font-medium text-gray-900">
        What does an internet built for agents actually look like?
      </p>
      <p>
        If the internet becomes the primary interface between agents, then its structure, protocols, and
        content formats must evolve.
      </p>
      <p>Today’s web is human-optimized:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Visual interfaces</li>
        <li>Fragmented data</li>
        <li>Implicit context</li>
        <li>Unstructured content</li>
      </ul>
      <p>But agents require something fundamentally different at scale:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Structured, machine-readable data</li>
        <li>Explicit semantics</li>
        <li>Verifiable sources</li>
        <li>Actionable interfaces</li>
      </ul>
      <p>
        At first glance, it may seem like this layer is no longer necessary. After all, modern language
        models are remarkably good at extracting meaning from unstructured data.
      </p>
      <p>But that capability is a bridge, not a foundation.</p>
      <p>
        LLMs can partially compensate for the lack of structure; they don’t eliminate the need for it. As
        agents move from passive interpretation to active execution, ambiguity becomes a liability. Systems
        that rely purely on inference begin to break down in consistency, cost, and reliability at scale.
      </p>
      <p>
        Which is why, over time, the internet is likely to evolve not away from structure, but toward it.
      </p>
      <p>We are still at the very beginning of defining what this agent-native layer looks like.</p>

      <h2 className="text-2xl font-bold text-gray-900 pt-4">A Signal from the Market</h2>
      <p>
        Interestingly, Y Combinator recently highlighted a related gap in their latest “<a href="https://www.ycombinator.com/rfs" className="text-primary-600 underline hover:text-primary-700" target="_blank" rel="noopener noreferrer">Request for Startups.</a>”
      </p>
      <p>Their call reflects a growing belief in the ecosystem:</p>
      <p className="font-medium text-gray-900">
        The internet is no longer a purely human-centric environment, and the next generation of companies will
        be built around this shift toward agent-native systems.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 pt-4">What Comes Next?</h2>
      <p>So, what does this mean for individuals, builders, and companies?</p>
      <p>We’re entering a phase where:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Products may be designed for agents first, humans second</li>
        <li>Agent Interfaces may become more important than traditional UIs</li>
        <li>Content may be created with machine consumption as the primary goal</li>
      </ul>
      <p>This is not a small shift. It’s a repurposing of the internet itself.</p>
      <p>And like all paradigm shifts, it creates asymmetrical opportunities for those who move early.</p>

      <h2 className="text-2xl font-bold text-gray-900 pt-4">Final Thought</h2>
      <p>We are still in the early innings of the Internet of Agents.</p>
      <p>
        The rules are not fully defined. The standards do not yet exist. The dominant platforms have not
        emerged.
      </p>
      <p>Which makes this one of the most exciting moments to build.</p>
    </div>
  )
}
