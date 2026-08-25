<!-- SLIDE 01 -->
<!-- .slide: class="title-slide" data-background-gradient="radial-gradient(circle at 78% 30%, rgba(214,227,106,.16), transparent 32%), linear-gradient(120deg, #151216 0%, #211a23 58%, #2b1d2f 100%)" -->

# AI agents for research

## Simulations, experimental automation, and visualisation

### What was unimaginable half a year ago is now simply a must

<p>Egor Manuylovich<br>
Aston Institute of Photonic Technologies<br>
Aston University</p>



Note:
Introduce the three research workflows and the common human-agent operating model.

[Sources]
- Content adapted from the speaker's private earlier AI agents for research presentation.
- Blender section adapted from the speaker's published Coding agents + Blender MCP talk.
[/Sources]

---

<!-- SLIDE 02 -->
<!-- .slide: class="poster-slide" -->

<div class="poster-kicker">Before we begin</div>

# This talk is a little different

<div class="poster-layout">
  <div class="poster-copy">
    <p class="poster-lead">It is not about our latest research.</p>
    <p class="poster-skill">It is about <strong>transferable skills for researchers</strong>: using AI agents across simulation, experiments, and visualisation.</p>
    <div class="poster-invite">
      <span>For our recent research</span>
      <strong>Visit Luca's poster today</strong>
    </div>
    <p class="poster-transition">And now, let us proceed with this talk.</p>
  </div>
  <figure class="poster-figure">
    <a href="https://www.nature.com/articles/s41467-026-75602-8">
      <img class="paper-screenshot" src="assets/images/nature-communications-paper.png" alt="Nature Communications article page for Small-scale photonic Kolmogorov-Arnold networks using standard telecom nonlinear modules">
    </a>
  </figure>
</div>

Note:
This talk is a little different from the research talks earlier today. It is not about our latest results, but about transferable skills for researchers. To hear about our recent work, please visit Luca's poster today. Then transition: and now, let us proceed with this talk.

[Sources]
- https://www.nature.com/articles/s41467-026-75602-8
[/Sources]

---

<!-- SLIDE 03 -->

# What this talk is about

<div class="talk-grid">
  <div><span>01</span><strong>Coding agents</strong><small>What changes when software can act in its own loop</small></div>
  <div><span>02</span><strong>Scientific simulations</strong><small>From fast prompting to specifications and tests</small></div>
  <div><span>03</span><strong>Experimental automation</strong><small>Building software to help you automate experiments</small></div>
  <div><span>04</span><strong>Scientific visualisation</strong><small>Blender MCP and API for figures</small></div>
</div>

---

<!-- SLIDE 04 -->

# What are AI coding agents?

<div class="agent-table">
  <div><strong>Chatbot</strong><span>Answers questions and generates code snippets on demand.</span><small>ChatGPT · Claude · Gemini</small></div>
  <div><strong>Autocomplete</strong><span>Suggests code while you type, one line or block at a time.</span><small>Copilot · Cursor</small></div>
  <div class="active"><strong>Agent</strong><span>Reads files, edits codebases, runs tests, sees errors, and iterates.</span><small>Codex · Claude Code · Cursor</small></div>
</div>

<div class="bottom-line">The key difference: an agent can inspect, act, observe the result, and revise.</div>

---

<!-- SLIDE 05 -->

# AI-assisted simulations: what changes?

<div class="compare compare-large">
  <div>
    <h3>Before</h3>
    <ul>
      <li>Slow, manual coding for simulations</li>
      <li>Fragmented scripts per use-case</li>
      <li>Manual plotting and formatting</li>
      <li>Documentation: too boring to write</li>
    </ul>
  </div>
  <div>
    <h3>With agents</h3>
    <ul>
      <li>Modular, reusable components</li>
      <li>Parameter sweeps generated quickly</li>
      <li>Plotting pipelines automated end-to-end</li>
      <li>Tests and documentation added early</li>
      <li>Faster hypothesis iteration</li>
    </ul>
  </div>
</div>

<div class="bottom-line">The biggest gain is making previously "too-hard-to-be-feasible" software practical.</div>

---

<!-- SLIDE 06 -->

# The research bottleneck is shifting

<div class="research-chain">
  <span>Idea</span><span>Model</span><span>Code</span><span>Experiment</span><span>Data</span><span>Figure</span><span>Paper</span>
</div>

<div class="statement small-statement">Research is increasingly software-heavy: glue code, plotting, automation, interfaces, debugging, and data wrangling.</div>

<div class="two-statements">
  <p><strong>Agents reduce software friction.</strong><br><small>Generate, test, refactor, document, and connect systems.</small></p>
  <p><strong>Verification is often easier than construction.</strong><br><small>But only when the researcher knows what must remain true.</small></p>
</div>

---

<!-- SLIDE 07 -->

# Examples from simulation work

<div class="image-pair simulation-examples">
  <figure>
    <img class="light-frame" src="assets/images/simulation-system.webp" alt="Photonic system represented as a sequence of trainable optical elements">
    <figcaption>Map photonic elements pytorch layers, optimise!</figcaption>
  </figure>
  <figure>
    <img class="light-frame" src="assets/images/simulation-model.webp" alt="Structure of a mode-coupling matrix for a three-mode fibre">
    <figcaption>Writing plotting script for this manually would be a nightmare!</figcaption>
  </figure>
</div>

<div class="bottom-line">The agent can translate your words in the actual code. You must define the physics and meaning.</div>

---

<!-- SLIDE 08 -->

# Vibe coding

<div class="statement">Fast prompting with minimal planning: “make me a simulator”, then iterate until it looks right.</div>

<div class="compare compact">
  <div>
    <h3>Good for</h3>
    <ul>
      <li>One-off scripts and quick plots</li>
      <li>Educational demonstrations</li>
      <li>Small GUIs and data explorers</li>
      <li>Fast hypothesis sketches</li>
    </ul>
  </div>
  <div>
    <h3>Risk</h3>
    <ul>
      <li>Hidden bugs that look plausible</li>
      <li>Hard-to-maintain code</li>
      <li>Poor reproducibility</li>
      <li>Difficult validation and extension</li>
    </ul>
  </div>
</div>

<div class="bottom-line">Useful for short scripts; unpractical for more complex research software.</div>

---

<!-- SLIDE 09 -->

# Where agents are good and where not

<div class="compare">
  <div>
    <h3>Good at</h3>
    <ul>
      <li>APIs, wrappers, and boilerplate</li>
      <li>Plotting and interactive dashboards</li>
      <li>File handling and data pipelines</li>
      <li>Refactoring and documentation</li>
      <li>Writing and running tests</li>
    </ul>
  </div>
  <div>
    <h3>Weak at</h3>
    <ul>
      <li>Scientific correctness</li>
      <li>Hidden physical assumptions</li>
      <li>Numerical validity and stability</li>
      <li>Domain-specific conventions</li>
      <li>Physical intuition</li>
    </ul>
  </div>
</div>

<div class="bottom-line accent-line">The researcher remains the scientific authority and is responsible for the result.</div>

---

<!-- SLIDE 10 -->

# Vibe coding → spec-driven development

<div class="loop-line">
  <span>requirements</span><i>→</i><span>equations</span><i>→</i><span>architecture</span><i>→</i><span>tests</span><i>→</i><span>implementation</span><i>→</i><span>validation</span>
</div>

<div class="spec-strip">
  <div><strong>agent.md</strong><span>Physics, conventions, architecture, and expected behaviour.</span></div>
  <div><strong>Acceptance tests</strong><span>Define what correct output looks like before implementation.</span></div>
  <div><strong>Project structure</strong><span>Modular components let the agent work on isolated responsibilities.</span></div>
  <div><strong>Reproducibility</strong><span>Specs and version control make the work auditable and extensible.</span></div>
</div>

---

<!-- SLIDE 11 -->

# Why specifications and tests matter in science

<div class="test-grid">
  <div><strong>Physical assumptions</strong><span>Steady-state versus dynamic behaviour must be explicit.</span></div>
  <div><strong>Interferometer phase</strong><span>Reflection and transmission conventions change the result.</span></div>
  <div><strong>Propagation operator</strong><span>The phase-accumulation sign determines physical meaning.</span></div>
  <div><strong>Energy conservation</strong><span>Lossless limits must remain lossless.</span></div>
  <div><strong>Orthogonality</strong><span>Modal constraints must be built into the implementation.</span></div>
  <div><strong>Units</strong><span>Radians, degrees, nanometres, and micrometres cannot silently mix.</span></div>
</div>

<div class="bottom-line">In research, “looks correct” is not sufficient.</div>

---

<!-- SLIDE 12 -->

# Human-agent research loop

<div class="role-grid">
  <div>
    <h3>Human</h3>
    <ul>
      <li>Defines the physics and mathematics</li>
      <li>Writes the specification</li>
      <li>Sets acceptance criteria and tests</li>
      <li>Checks physical meaning and edge cases</li>
    </ul>
  </div>
  <div>
    <h3>Agent</h3>
    <ul>
      <li>Creates project structure</li>
      <li>Implements modules from the specification</li>
      <li>Writes tests and runs sweeps</li>
      <li>Refactors, documents, and plots</li>
    </ul>
  </div>
</div>

<div class="bottom-line">You do the science; the agent is your hard-working implementation partner.</div>

---

<!-- SLIDE 13 -->

# Testing scientific software

<div class="quote-stage">
  <blockquote>“If you cannot define a test, you probably do not yet understand the system.”</blockquote>
  <div class="response-summary">
    conservation laws · symmetry and reciprocity · analytical benchmarks ----- Testing now is even more important!
  </div>
</div>

<div class="example-tests">
  <span>zero nonlinearity → linear propagation</span>
  <span>zero length → identity matrix</span>
  <span>lossless system → energy conservation</span>
  <span>symmetric beamsplitter → equal splitting</span>
  <span>phase wrap at 2π → field continuity</span>
  <span>degenerate modes → orthogonal eigenfunctions</span>
</div>

---

<!-- SLIDE 14 -->
<!-- .slide: class="demo-slide" -->

<div class="demo-label">Live demo 1</div>

# AI-assisted simulation

<div class="demo-copy">Optical Circuit Lab</div>

<div class="loop-line">
  <span>specify</span><i>→</i><span>implement</span><i>→</i><span>test</span><i>→</i><span>inspect</span>
</div>

---

<!-- SLIDE 15 -->

# The traditional lab software problem

<div class="instrument-row">
  <span>Laser</span><span>Oscilloscope</span><span>SLM</span><span>Camera</span><span>Stage</span><span>Power meter</span>
</div>

<div class="compare compact">
  <div>
    <h3>What researchers juggle</h3>
    <ul>
      <li>Different software for every instrument</li>
      <li>Manual clicking with no scripting</li>
      <li>Session-specific configuration</li>
    </ul>
  </div>
  <div>
    <h3>What experiments need</h3>
    <ul>
      <li>Synchronisation across devices</li>
      <li>Reproducible acquisition sequences</li>
      <li>Logging, errors, and recovery</li>
    </ul>
  </div>
</div>

---

<!-- SLIDE 16 -->

# AI-generated lab orchestration software

<div class="two-col">
  <div>
    <h3>Interfaces already exist</h3>
    <div class="tag-cloud"><span>SCPI</span><span>VISA</span><span>Serial</span><span>Python SDK</span><span>REST</span><span>USB HID</span></div>
  </div>
  <div>
    <h3>Agents connect the pieces</h3>
    <ul>
      <li>Read vendor documentation and examples</li>
      <li>Write device wrappers</li>
      <li>Build a shared Python backend</li>
      <li>Generate dashboards and experiment sequences</li>
      <li>Add logging and error handling</li>
    </ul>
  </div>
</div>

<div class="bottom-line">Instrument APIs are necessary; orchestration turns them into an experiment.</div>

---

<!-- SLIDE 17 -->

# From orchestration to closed-loop experiments

<div class="loop-line large-loop">
  <span>instrument control</span><i>→</i><span>measurement</span><i>→</i><span>analysis</span><i>→</i><span>optimiser</span><i>→</i><span>updated control</span>
</div>

<div class="four-words">
  <strong>phase stabilisation</strong>
  <strong>adaptive measurement</strong>
  <strong>Bayesian optimisation</strong>
  <strong>autonomous alignment</strong>
</div>

<div class="bottom-line">The output of analysis becomes the next experimental action.</div>

---

<!-- SLIDE 18 -->

# Example: SLM and camera control software

<div class="full-width-figure interface-shot">
  <img src="assets/images/slm-camera-control.webp" alt="Custom software coordinating camera acquisition and an SLM pattern">
</div>

<div class="bottom-line">One interface coordinates live camera inspection, SLM patterns, acquisition settings, and saved data.</div>

---

<!-- SLIDE 19 -->

# Real example: phase masks and calibration

<div class="full-width-figure interface-shot">
  <img src="assets/images/phase-mask-calibration.webp" alt="Measured optical field and the phase mask displayed by the SLM control software">
</div>

<div class="bottom-line">Manual alignment becomes a repeatable calibration and dataset-generation workflow.</div>

---

<!-- SLIDE 20 -->
<!-- .slide: class="demo-slide" -->

<div class="demo-label">Live demo 2</div>

# Custom SLM-camera control

<div class="demo-copy">Lab orchestration and automatic dataset acquisition</div>

<div class="loop-line">
  <span>set pattern</span><i>→</i><span>acquire</span><i>→</i><span>analyse</span><i>→</i><span>save</span>
</div>

---

<!-- SLIDE 21 -->

# Scientific visualisation matters

<div class="two-col visual-intro">
  <div>
    <div class="statement small-statement">A scientific figure is part of the argument, not decoration added after the science.</div>
    <ul>
      <li>Communicate the physical mechanism</li>
      <li>Guide the reader's intuition</li>
      <li>Look deliberate and unambiguous</li>
      <li>Remain reproducible from source files</li>
    </ul>
  </div>
  <figure>
    <img src="assets/images/nature-cover.webp" alt="Nature Photonics cover showing a photonic integrated circuit">
    <figcaption>Effective visualisation combines physical structure with a clear visual hierarchy.</figcaption>
  </figure>
</div>

---

<!-- SLIDE 22 -->

# The good, the bad and the ugly

<div class="good-bad-ugly">
  <figure>
    <img src="assets/images/visualisation-collage.webp" alt="Examples of polished scientific visualisation">
    <figcaption><strong>Good:</strong> compelling visual craft</figcaption>
  </figure>
  <figure>
    <img class="light-frame" src="assets/images/bad-optical-figure.webp" alt="A conventional flat optical system schematic">
    <figcaption><strong>Bad:</strong> correct, clear, forgettable</figcaption>
  </figure>
  <figure>
    <img src="assets/images/ugly-example.webp" alt="AI-generated mouse anatomy with nonsensical labels">
    <figcaption><strong>Ugly:</strong> polished appearance, broken science</figcaption>
  </figure>
</div>

<div class="bottom-line">We need both: scientific judgement and visual craft.</div>

---

<!-- SLIDE 23 -->
<!-- .slide: class="hinge-slide" -->

# Three reasons Blender changes the calculation

<div class="triptych">
  <div><span>01</span><strong>Blender is free</strong><small>Open-source, with no licence barrier.</small></div>
  <div><span>02</span><strong>Blender is scriptable</strong><small>A scene can be generated and revised through code.</small></div>
  <div><span>03</span><strong>Blender has MCP</strong><small>An agent can interact directly with the application.</small></div>
</div>

<div class="bottom-line">You do not need to become a professional 3D artist, but you must learn enough to inspect the result.</div>

---

<!-- SLIDE 24 -->

# Coding agent + Blender MCP

<div class="loop-line large-loop">
  <span>physical brief</span><i>→</i><span>coding agent</span><i>→</i><span>Blender MCP</span><i>→</i><span>scene and render</span><i>→</i><span>inspection</span>
</div>

<div class="two-col mcp-layout">
  <div>
    <p><strong>Model Context Protocol</strong> connects an AI application to external tools.</p>
    <p class="muted">For Blender, those tools expose objects, materials, lights, cameras, scripts, scene inspection, and rendering.</p>
  </div>
  <div class="mcp-metaphor">
    <small>In practical terms</small>
    <strong>language<br>becomes<br>tool calls</strong>
  </div>
</div>

---

<!-- SLIDE 25 -->

# Brief it like a 3D artist and a physicist

<div class="spec-figure-layout">
  <div>
    <ul class="instruction-list">
      <li><strong>Scientific story and source data</strong><span>What mechanism must the reader understand?</span></li>
      <li><strong>Physical constraints</strong><span>What geometry, convention, or implication must remain true?</span></li>
      <li><strong>Visual hierarchy</strong><span>What is the hero, and in what order should the scene be read?</span></li>
      <li><strong>Failure conditions</strong><span>What must the figure never imply?</span></li>
      <li><strong>Style and deliverables</strong><span>References, camera, aspect ratio, labels, and export format.</span></li>
    </ul>
  </div>
  <figure class="prompting-figure">
    <img src="assets/images/precise-prompting.webp" alt="Drawing contrasting a vague instruction with a precise instruction">
  </figure>
</div>

<div class="bottom-line">Ask the model to describe the scene and ask clarifying questions before it writes the specification.</div>

---

<!-- SLIDE 26 -->

# From flat reference to one coherent scene

<div class="before-after">
  <figure>
    <img class="light-frame" src="assets/images/reference-figure.webp" alt="Original flat scientific figure for a micro-ring reservoir system">
    <figcaption>Reference: accurate stages, weak spatial coherence</figcaption>
  </figure>
  <i>→</i>
  <figure>
    <img src="assets/images/data-driven-figure.webp" alt="Blender render of the micro-ring reservoir and optical readout">
    <figcaption>Blender: one physical scene with an explicit reading order</figcaption>
  </figure>
</div>

<div class="bottom-line">Resolve the interpretation first: preserve the science, then choose the visual hero.</div>

---

<!-- SLIDE 27 -->

# Let the agent work the visual loop

<div class="two-col demo-layout">
  <div>
    <ol>
      <li>Give it the specification and references.</li>
      <li>Let it build through Blender MCP.</li>
      <li>Request preview renders and scene inspection.</li>
      <li>Correct one physical or visual issue at a time.</li>
    </ol>
    <div class="prompt-card">
      <small>Useful feedback</small>
      <p>“The attenuators must visibly reduce each outgoing beam's intensity.”</p>
    </div>
  </div>
  <figure class="agent-screenshot">
    <img src="assets/images/codex-blender-agent.webp" alt="Coding agent updating attenuation logic in a Blender scene">
    <figcaption>A visual correction becomes a concrete scene and code change.</figcaption>
  </figure>
</div>

---

<!-- SLIDE 28 -->

# Feedback should sound like an art director and a physicist

<div class="feedback-list">
  <p>“The spectrum looks continuous. Make the channels discrete.”</p>
  <p>“The detector is too large. Restore the micro-ring as the hero.”</p>
  <p>“Remove the external loop. Memory must be intracavity.”</p>
  <p>“Make weighting visible through beam intensity.”</p>
</div>

<div class="four-words feedback-meanings">
  <strong>domain meaning</strong>
  <strong>visual diagnosis</strong>
  <strong>failure criterion</strong>
  <strong>next action</strong>
</div>

<div class="bottom-line accent-line">Be specific: vague input produces vague geometry.</div>

---

<!-- SLIDE 29 -->

# Replace decoration with real data

<div class="data-example-layout">
  <div>
    <p>Give the agent:</p>
    <ul>
      <li>measured spectra</li>
      <li>simulated field profiles</li>
      <li>device dimensions</li>
      <li>intensity traces</li>
      <li>exact export constraints</li>
    </ul>
    <p class="muted">The scene can carry scientific information, not just scientific aesthetics.</p>
  </div>
  <figure class="real-data-figure">
    <img src="assets/images/blender-scene.webp" alt="Blender illustration with field distributions embedded along an optical path">
    <figcaption>Field data embedded directly in the rendered optical path</figcaption>
  </figure>
</div>

---

<!-- SLIDE 30 -->

# Practical advice for researchers

<div class="checklist">
  <div><span>1</span><strong>Learn basic Python, Git, and enough Blender to inspect results.</strong></div>
  <div><span>2</span><strong>Start with one small, well-defined tool or scene.</strong></div>
  <div><span>3</span><strong>Write the specification before implementation.</strong></div>
  <div><span>4</span><strong>Always ask for tests and explicit failure conditions.</strong></div>
  <div><span>5</span><strong>Validate every output against physics and known limits.</strong></div>
  <div><span>6</span><strong>Keep specifications, code, scenes, and results under version control.</strong></div>
</div>

---

<!-- SLIDE 31 -->

# Limits and pitfalls

<div class="compare">
  <div>
    <h3>Risks</h3>
    <ul>
      <li>Plausible but incorrect code</li>
      <li>Hidden physical assumptions</li>
      <li>Convincing but wrong geometry</li>
      <li>Weak reproducibility</li>
      <li>Over-trust in demo outputs</li>
    </ul>
  </div>
  <div>
    <h3>Mitigation</h3>
    <ul>
      <li>Write specifications before building</li>
      <li>Define tests that can fail</li>
      <li>Validate against analytical limits</li>
      <li>Commit everything to version control</li>
      <li>Treat agent output as a first draft</li>
    </ul>
  </div>
</div>

<div class="bottom-line">Plausible wrongness is more dangerous than obvious failure.</div>

---

<!-- SLIDE 32 -->
<!-- .slide: class="closing-slide" data-background-gradient="radial-gradient(circle at 25% 80%, rgba(189,164,255,.18), transparent 34%), radial-gradient(circle at 78% 22%, rgba(214,227,106,.16), transparent 34%), #151216" -->

# (Domain) expertise is now even more valuable than before

<div class="closing-grid">
  <div class="closing-message">
    <div class="closing-copy">Agents amplify whatever skill level the researcher brings.</div>
    <div class="closing-action">Specify precisely. Delegate implementation. Validate scientifically.</div>
    <div class="closing-copy">As always: garbage in → garbage out.</div>
  </div>
  <div class="closing-qr">
    <a href="https://egor-manu.github.io/ai-agents-for-research-talk/" target="_blank" rel="noopener" aria-label="Open the AI agents for research presentation">
      <img src="assets/images/presentation-qr.png" alt="QR code linking to the AI agents for research presentation">
    </a>
    <strong>Scan for the full presentation</strong>
    <span>egor-manu.github.io/<wbr>ai-agents-for-research-talk</span>
  </div>
</div>

Note:
Close on responsibility: agents expand the feasible scope of research software and visualisation, but scientific authority remains human. Keep this slide visible while the audience scans the QR code.
