<!-- SLIDE 01 -->
<!-- .slide: class="title-slide" data-background-image="assets/images/hero.webp" data-background-size="cover" data-background-position="center" -->

# AI agents for research:

## simulations, experimental automation, and visualisation

<div class="speaker">
  <strong>Egor Manuylovich</strong>
  <span>Aston Institute of Photonic Technologies</span>
  <span>Aston University</span>
</div>

Note:
This talk connects three research workflows through one human-agent operating model.

[Sources]
- Visual and copy adapted from the speaker's earlier AI agents for research deck in `references/`.
[/Sources]

---

<!-- SLIDE 02 -->

<p class="eyebrow">The change</p>

# The research bottleneck has moved

<div class="research-chain">
  <span>Idea</span><span>Model</span><span>Code</span><span>Experiment</span><span>Data</span><span>Figure</span><span>Paper</span>
</div>

<p class="statement">More research time is spent on <span class="accent">software between the scientific steps</span>: setup, integration, debugging, automation, plotting, and documentation.</p>

<p class="bottom-line">Agents make previously uneconomic research software practical, but only when scientific validation remains explicit.</p>

Note:
Use the chain to show that agents do not replace theory or experiment; they reduce friction between them.

[Sources]
- Speaker's earlier AI agents for research deck, slides 4-5.
[/Sources]

---

<!-- SLIDE 03 -->

<p class="eyebrow">What is different</p>

# An agent is software inside its own work loop

<div class="loop large">
  <span>read context</span><i>&rarr;</i><span>act</span><i>&rarr;</i><span>observe</span><i>&rarr;</i><span>revise</span>
</div>

<div class="compare">
  <div>
    <h3>Chatbot</h3>
    <p>Answers a prompt and returns code or advice.</p>
  </div>
  <div>
    <h3>Agent</h3>
    <p>Reads files, edits a project, runs tools and tests, sees failures, and iterates.</p>
  </div>
</div>

<p class="bottom-line">The important shift is from generating snippets to changing and checking a working system.</p>

Note:
Keep the definition operational. The tool loop matters more than branding or model names.

[Sources]
- Speaker's earlier AI agents for research deck, slide 3.
- Speaker's Blender agents talk, conceptual agent loop.
[/Sources]

---

<!-- SLIDE 04 -->

<p class="eyebrow">Division of labour</p>

# The researcher keeps scientific authority

<div class="role-grid">
  <div>
    <h3>Researcher</h3>
    <ul>
      <li>Defines the physics and assumptions</li>
      <li>Sets tests and acceptance criteria</li>
      <li>Interprets outputs and edge cases</li>
      <li>Decides what counts as evidence</li>
    </ul>
  </div>
  <div>
    <h3>Agent</h3>
    <ul>
      <li>Builds modules and interfaces</li>
      <li>Runs tests and parameter sweeps</li>
      <li>Refactors, documents, and plots</li>
      <li>Repeats mechanical feedback loops</li>
    </ul>
  </div>
</div>

<p class="bottom-line">You do the science. The agent increases the speed and scope of implementation.</p>

Note:
Scientific responsibility cannot be delegated to a system that does not know which hidden assumptions matter.

[Sources]
- Speaker's earlier AI agents for research deck, slides 8 and 11.
[/Sources]

---

<!-- SLIDE 05 -->

<p class="eyebrow">The talk</p>

# Three domains, one operating model

<div class="triptych">
  <div><strong>Simulations</strong><span>Turn equations and conventions into tested software.</span></div>
  <div><strong>Automation</strong><span>Turn device APIs into reproducible experiments.</span></div>
  <div><strong>Visualisation</strong><span>Turn scientific structure and data into inspectable scenes.</span></div>
</div>

<p class="statement small">In every case: <span class="accent">specify clearly, let the agent work, and validate against reality.</span></p>

Note:
This is the organising thesis for the rest of the talk.

[Sources]
- Synthesis of the speaker's two earlier talks.
[/Sources]

---

<!-- SLIDE 06 -->
<!-- .slide: class="section-slide section-sim" -->

<div class="section-number">01</div>

# Simulations

<p>When code becomes part of the model, tests become part of the science.</p>

Note:
Section transition.

[Sources]
- Speaker's earlier AI agents for research deck, simulation section.
[/Sources]

---

<!-- SLIDE 07 -->

<p class="eyebrow">Scientific software</p>

# Simulation code is part of the scientific instrument

<div class="two-col wide-left">
  <div>
    <p class="statement">An agent can build the machinery quickly. It cannot decide whether the machinery expresses the right physics.</p>
    <ul>
      <li>Equations and approximations</li>
      <li>Units and sign conventions</li>
      <li>Boundary and limiting cases</li>
      <li>Numerical stability</li>
    </ul>
  </div>
  <figure class="full-figure">
    <img class="light-frame" src="assets/images/simulation-system.webp" alt="Published photonic system diagram">
    <figcaption>Example photonic system used as a simulation target</figcaption>
  </figure>
</div>

Note:
Frame simulation code as an experimental apparatus: it requires calibration and known checks.

[Sources]
- System diagram embedded in the speaker's earlier AI agents for research deck.
[/Sources]

---

<!-- SLIDE 08 -->

<p class="eyebrow">Use the right mode</p>

# Fast prompting is useful only when failure is cheap

<div class="compare">
  <div>
    <h3>Useful for exploration</h3>
    <ul>
      <li>One-off scripts and plots</li>
      <li>Educational demonstrations</li>
      <li>Interface sketches</li>
      <li>Early hypothesis exploration</li>
    </ul>
  </div>
  <div>
    <h3>Unsafe as a final method</h3>
    <ul>
      <li>Hidden bugs can look plausible</li>
      <li>Assumptions remain undocumented</li>
      <li>Iteration becomes harder to reproduce</li>
      <li>Correctness is judged by appearance</li>
    </ul>
  </div>
</div>

<p class="bottom-line">Use rapid prompting to discover the problem. Use specifications and tests to produce research software.</p>

Note:
Avoid dismissing vibe coding completely; it is a useful exploratory mode with a clear boundary.

[Sources]
- Speaker's earlier AI agents for research deck, slides 7-9.
[/Sources]

---

<!-- SLIDE 09 -->

<p class="eyebrow">Specification</p>

# A specification turns intent into checkable physics

<div class="spec-strip">
  <div><strong>Model</strong><span>Governing equations and the physical regime.</span></div>
  <div><strong>Conventions</strong><span>FFT sign, phase, coordinates, units, and normalisation.</span></div>
  <div><strong>Architecture</strong><span>Modules, interfaces, data flow, and saved artefacts.</span></div>
  <div><strong>Acceptance</strong><span>Analytical limits, conservation laws, and tolerances.</span></div>
</div>

<div class="loop">
  <span>requirements</span><i>&rarr;</i><span>physics</span><i>&rarr;</i><span>tests</span><i>&rarr;</i><span>implementation</span><i>&rarr;</i><span>validation</span>
</div>

Note:
The specification is an external memory for both the human and the agent.

[Sources]
- Speaker's earlier AI agents for research deck, slides 9-10.
[/Sources]

---

<!-- SLIDE 10 -->

<p class="eyebrow">Tests as scientific statements</p>

# A test should say what must remain true

<div class="test-list">
  <div><b>01</b><span>Zero nonlinearity produces linear propagation.</span></div>
  <div><b>02</b><span>Zero length produces the identity transfer matrix.</span></div>
  <div><b>03</b><span>A lossless system conserves energy.</span></div>
  <div><b>04</b><span>A symmetric beamsplitter splits equally.</span></div>
  <div><b>05</b><span>A phase wrap at 2&pi; preserves field continuity.</span></div>
</div>

<p class="bottom-line">If you cannot define a failure condition, you probably do not yet understand the system well enough to delegate it.</p>

Note:
These tests are compact expressions of physical understanding, not merely software hygiene.

[Sources]
- Speaker's earlier AI agents for research deck, slide 14.
[/Sources]

---

<!-- SLIDE 11 -->

<p class="eyebrow">Debugging</p>

# Agents accelerate debugging and create new failure modes

<div class="failure-list">
  <p><strong>Beamsplitter convention</strong> reflection and transmission phases differ.</p>
  <p><strong>Arm-length sum vs difference</strong> a plausible formula can encode the wrong geometry.</p>
  <p><strong>Propagation sign</strong> a sign change reverses the physical interpretation.</p>
  <p><strong>Unit mismatch</strong> nm, &micro;m, radians, and degrees mix silently.</p>
  <p><strong>Numerical instability</strong> a smooth plot can hide a failing method.</p>
</div>

<p class="bottom-line warm">Plausible wrongness is more dangerous than an obvious crash.</p>

Note:
The agent's speed increases the need for fast, targeted scientific checks.

[Sources]
- Speaker's earlier AI agents for research deck, slide 13.
[/Sources]

---

<!-- SLIDE 12 -->

<p class="eyebrow">Workflow</p>

# A useful simulation loop separates building from believing

<div class="stage-flow">
  <div><strong>1. Specify physics</strong><span>Equations, assumptions, conventions, and known limits.</span></div>
  <div><strong>2. Implement and test</strong><span>Modules, unit tests, physical checks, and benchmark cases.</span></div>
  <div><strong>3. Sweep and interpret</strong><span>Parameter studies, plots, human interpretation, and revised assumptions.</span></div>
</div>

<figure class="full-figure">
  <img class="light-frame" src="assets/images/simulation-model.webp" alt="Model structure for a photonic simulation">
  <figcaption>Concrete system structure makes a useful benchmark for generated code</figcaption>
</figure>

Note:
The researcher can revise the specification when the outputs reveal an incomplete assumption.

[Sources]
- Speaker's earlier AI agents for research deck, slides 6 and 12.
[/Sources]

---

<!-- SLIDE 13 -->

<p class="eyebrow">Case study</p>

# Optical Circuit Lab makes the model inspectable

<div class="two-col split-line">
  <div>
    <p class="statement">A reusable simulator is more valuable than a single successful plot.</p>
    <ul>
      <li>Explicit optical components</li>
      <li>Analytical benchmark cases</li>
      <li>Interactive parameter changes</li>
      <li>Plots generated from one data path</li>
    </ul>
  </div>
  <div>
    <h3>The agent's contribution</h3>
    <p>Architecture, implementation, tests, interface, refactoring, and documentation.</p>
    <h3>The researcher's contribution</h3>
    <p>Physical conventions, acceptance criteria, interpretation, and approval.</p>
  </div>
</div>

Note:
Prepare the local demo before presenting. Keep static screenshots available as a fallback.

[Sources]
- Speaker's earlier AI agents for research deck, live demo 1.
[/Sources]

---

<!-- SLIDE 14 -->
<!-- .slide: class="demo-slide" -->

<p class="demo-label">Live demo 1</p>

# A simulator that can be tested

<p class="demo-copy">Change a physical parameter, inspect the generated result, then run a known limiting case that can fail.</p>

<div class="loop">
  <span>change</span><i>&rarr;</i><span>predict</span><i>&rarr;</i><span>run</span><i>&rarr;</i><span>check</span>
</div>

Note:
Demonstrate scientific validation, not just interface fluency.

[Sources]
- Speaker's Optical Circuit Lab demonstration.
[/Sources]

---

<!-- SLIDE 15 -->
<!-- .slide: class="section-slide section-auto" -->

<div class="section-number">02</div>

# Experimental automation

<p>When device control becomes software, the experiment becomes reproducible and composable.</p>

Note:
Section transition.

[Sources]
- Speaker's earlier AI agents for research deck, experimental automation section.
[/Sources]

---

<!-- SLIDE 16 -->

<p class="eyebrow">The lab software problem</p>

# Instrument APIs are necessary but not sufficient

<div class="interface-row">
  <span>Laser</span><span>Oscilloscope</span><span>SLM</span>
  <span>Camera</span><span>Motion stage</span><span>Power meter</span>
</div>

<div class="compare">
  <div><h3>What exists</h3><p>Each instrument usually exposes a programmable interface.</p></div>
  <div><h3>What is missing</h3><p>A shared data model, synchronisation, error handling, and repeatable workflows.</p></div>
</div>

Note:
The core problem is integration, not a lack of vendor APIs.

[Sources]
- Speaker's earlier AI agents for research deck, slide 16.
[/Sources]

---

<!-- SLIDE 17 -->

<p class="eyebrow">Agent leverage</p>

# Agents can turn vendor interfaces into a shared backend

<div class="interface-row">
  <span>SCPI / VISA</span><span>Serial / RS-232</span><span>Python SDK</span>
  <span>REST API</span><span>USB HID</span><span>File protocol</span>
</div>

<p class="statement">The repeatable work is exactly where an agent helps: <span class="accent">read examples, write wrappers, connect interfaces, add tests, and document behaviour.</span></p>

<p class="bottom-line">The research-specific part remains the timing, safety, calibration, and meaning of each measurement.</p>

Note:
Vendor examples are often fragmented. Agents are effective at turning them into consistent wrappers.

[Sources]
- Speaker's earlier AI agents for research deck, slide 17.
[/Sources]

---

<!-- SLIDE 18 -->

<p class="eyebrow">Reproducibility</p>

# Orchestration turns a sequence of clicks into an experiment

<div class="loop large">
  <span>configure</span><i>&rarr;</i><span>acquire</span><i>&rarr;</i><span>analyse</span><i>&rarr;</i><span>log</span>
</div>

<div class="spec-strip">
  <div><strong>State</strong><span>Record every device setting and software version.</span></div>
  <div><strong>Timing</strong><span>Make synchronisation and waits explicit.</span></div>
  <div><strong>Failure</strong><span>Recover safely from timeouts and partial runs.</span></div>
  <div><strong>Data</strong><span>Save measurement, metadata, and analysis together.</span></div>
</div>

Note:
The value is not merely convenience. The workflow becomes inspectable, repeatable, and reviewable.

[Sources]
- Synthesis of the speaker's automation case study.
[/Sources]

---

<!-- SLIDE 19 -->

<p class="eyebrow">Closed loop</p>

# Analysis can become the next experimental action

<div class="closed-loop">
  <span>control</span><i>&rarr;</i><span>measurement</span><i>&rarr;</i><span>analysis</span><i>&rarr;</i><span>optimiser</span><i>&rarr;</i><span>updated control</span>
</div>

<ul>
  <li>Phase stabilisation and active correction</li>
  <li>Adaptive measurement where uncertainty is highest</li>
  <li>Bayesian optimisation of experimental parameters</li>
  <li>Automated alignment or mode matching</li>
</ul>

<p class="bottom-line">Closing the loop changes the experiment, so guardrails and stopping conditions must be part of the specification.</p>

Note:
Do not imply full autonomy is always desirable. Emphasise explicit bounds and safe failure.

[Sources]
- Speaker's earlier AI agents for research deck, slide 18.
[/Sources]

---

<!-- SLIDE 20 -->

<p class="eyebrow">Real interface</p>

# One interface can coordinate SLM and camera

<figure class="full-figure">
  <img src="assets/images/slm-camera-control.webp" alt="Custom SLM and camera control software">
  <figcaption>Custom software for SLM-camera calibration and automated dataset acquisition</figcaption>
</figure>

<p class="bottom-line">The interface is useful because it sits on top of one programmable, testable backend.</p>

Note:
Point out the live camera view, generated SLM pattern, and acquisition controls.

[Sources]
- Speaker-created SLM-camera control software screenshot from the earlier deck.
[/Sources]

---

<!-- SLIDE 21 -->

<p class="eyebrow">Calibration as data</p>

# Calibration becomes a repeatable data product

<figure class="full-figure">
  <img src="assets/images/phase-mask-calibration.webp" alt="Measured optical field and generated phase mask">
  <figcaption>Measured optical field and generated phase mask captured in the same workflow</figcaption>
</figure>

<p class="bottom-line">Automation preserves the relationship between settings, measurements, analysis, and generated control patterns.</p>

Note:
Contrast this with manually saving screenshots or rebuilding the calibration by memory.

[Sources]
- Speaker-created phase-mask calibration screenshot from the earlier deck.
[/Sources]

---

<!-- SLIDE 22 -->
<!-- .slide: class="demo-slide" -->

<p class="demo-label">Live demo 2</p>

# Automatic SLM-camera acquisition

<p class="demo-copy">Run a short acquisition sequence and show that device state, measurement, and generated mask remain linked.</p>

<div class="loop">
  <span>set mask</span><i>&rarr;</i><span>capture</span><i>&rarr;</i><span>analyse</span><i>&rarr;</i><span>save provenance</span>
</div>

Note:
Use a short deterministic sequence. Keep the previous screenshots available if hardware is unavailable.

[Sources]
- Speaker's SLM-camera laboratory demonstration.
[/Sources]

---

<!-- SLIDE 23 -->
<!-- .slide: class="section-slide section-viz" -->

<div class="section-number">03</div>

# Scientific visualisation

<p>A figure should make the physical mechanism easier to reason about, not merely look impressive.</p>

Note:
Section transition into the expanded material from the Blender agents talk.

[Sources]
- Speaker's Coding agents and Blender MCP for scientific figures talk.
[/Sources]

---

<!-- SLIDE 24 -->

<p class="eyebrow">Why it matters</p>

# Scientific visualisation is part of the reasoning

<div class="two-col wide-left">
  <div>
    <p class="statement">A strong figure communicates <span class="accent">mechanism, scale, relationships, and uncertainty</span> before the reader reaches the caption.</p>
    <ul>
      <li>Scientifically exact</li>
      <li>Visually deliberate</li>
      <li>Unambiguous</li>
      <li>Revisable from source</li>
    </ul>
  </div>
  <figure class="full-figure">
    <img src="assets/images/nature-cover.webp" alt="Nature Photonics cover showing an integrated photonics illustration">
    <figcaption>High-impact scientific illustration combines explanation and visual hierarchy</figcaption>
  </figure>
</div>

Note:
Separate aesthetic polish from scientific accuracy; the best figures need both.

[Sources]
- Nature Photonics cover reproduced in the speaker's earlier deck for educational discussion.
- Speaker's Blender agents talk, slides 3-6.
[/Sources]

---

<!-- SLIDE 25 -->

<p class="eyebrow">The skills bottleneck</p>

# Blender solves the rendering problem, but introduces another profession

<div class="figure-pair compact">
  <figure>
    <img src="assets/images/blender-ui.webp" alt="Blender scientific visualisation interface">
    <figcaption>Powerful geometry, materials, lighting, and rendering</figcaption>
  </figure>
  <figure>
    <img class="light-frame" src="assets/images/ugly-example.webp" alt="Scientifically motivated but visually awkward example figure">
    <figcaption>Scientific content alone does not guarantee visual clarity</figcaption>
  </figure>
</div>

<p class="bottom-line">Researchers need a way to express scientific intent without becoming full-time 3D artists.</p>

Note:
Blender is not difficult because it is badly designed; it is difficult because 3D design is a real discipline.

[Sources]
- Blender interface and published-example images embedded in the speaker's earlier decks.
[/Sources]

---

<!-- SLIDE 26 -->

<p class="eyebrow">Agent + tool</p>

# MCP gives the agent handles on the 3D scene

<div class="two-col mcp-layout">
  <div>
    <div class="loop">
      <span>text specification</span><i>&rarr;</i><span>agent</span><i>&rarr;</i><span>Blender API</span><i>&rarr;</i><span>render</span>
    </div>
    <ul>
      <li>Geometry and object hierarchy</li>
      <li>Materials, lighting, and camera</li>
      <li>Data-driven meshes and textures</li>
      <li>Saved scenes, renders, and revisions</li>
    </ul>
  </div>
  <div class="mcp-metaphor">
    <small>Model Context Protocol</small>
    <strong>not more intelligence,<br>more useful access</strong>
  </div>
</div>

<p class="bottom-line">The agent can operate Blender's scriptable scene graph and inspect the result through rendered images.</p>

Note:
Explain MCP as a standard route to tools and context, not as magic.

[Sources]
- Speaker's Blender agents talk, slides 10-13.
[/Sources]

---

<!-- SLIDE 27 -->

<p class="eyebrow">The brief</p>

# Brief the agent like a 3D artist and a physicist

<div class="two-col wide-right">
  <div>
    <ol class="instruction-list">
      <li>Describe what the scene must explain.</li>
      <li>Specify geometry, scale, and coordinate conventions.</li>
      <li>State what must be driven by real data.</li>
      <li>Define camera, lighting, and visual hierarchy.</li>
      <li>Ask for questions before implementation.</li>
    </ol>
  </div>
  <figure class="full-figure">
    <img src="assets/images/precise-prompting.webp" alt="Example of a precise scientific visualisation prompt">
    <figcaption>A useful specification is concrete enough to fail</figcaption>
  </figure>
</div>

Note:
The brief should encode both the physical scene and the communication job of the figure.

[Sources]
- Speaker's Blender agents talk, slides 14-19.
[/Sources]

---

<!-- SLIDE 28 -->

<p class="eyebrow">The visual loop</p>

# The useful loop is inspect, specify, render, critique

<div class="figure-pair compact">
  <figure>
    <img class="light-frame" src="assets/images/reference-figure.webp" alt="Reference scientific figure">
    <figcaption>Start by identifying the physical relationships in the reference</figcaption>
  </figure>
  <figure>
    <img src="assets/images/codex-blender-agent.webp" alt="Coding agent working with Blender">
    <figcaption>The agent edits the scene and returns a render for review</figcaption>
  </figure>
</div>

<div class="loop">
  <span>inspect</span><i>&rarr;</i><span>specify</span><i>&rarr;</i><span>render</span><i>&rarr;</i><span>critique</span>
</div>

Note:
Feedback should sound like an art director and a physicist: identify the visual defect and why it changes interpretation.

[Sources]
- Speaker's source figure and Codex-Blender workflow screenshot.
[/Sources]

---

<!-- SLIDE 29 -->

<p class="eyebrow">Combined reasoning</p>

# The agent can work on physics and graphics together

<div class="two-col wide-left">
  <div>
    <p class="statement">One instruction can connect a physical correction to a graphical change.</p>
    <div class="prompt-card">
      <p>"The field should expand after the phase element. Move the waist, reverse the propagation cue, and keep the detector plane fixed."</p>
    </div>
    <p>The researcher still checks whether the corrected scene expresses the intended physics.</p>
  </div>
  <figure class="full-figure">
    <img src="assets/images/blender-scene.webp" alt="Rendered optical system scene in Blender">
    <figcaption>One coherent, revisable 3D scene</figcaption>
  </figure>
</div>

Note:
This is the distinctive benefit of a coding agent controlling a scriptable graphics environment.

[Sources]
- Speaker-created Blender scene from the earlier AI agents for research deck.
[/Sources]

---

<!-- SLIDE 30 -->

<p class="eyebrow">Data-driven figures</p>

# Replace decorative geometry with real data

<div class="figure-pair compact">
  <figure>
    <img class="light-frame" src="assets/images/bad-optical-figure.webp" alt="Conventional optical system schematic">
    <figcaption>A schematic can explain topology without showing the measured field</figcaption>
  </figure>
  <figure>
    <img src="assets/images/data-driven-figure.webp" alt="Blender figure incorporating measured optical data">
    <figcaption>Measured or simulated arrays can drive geometry, texture, colour, and labels</figcaption>
  </figure>
</div>

<p class="bottom-line">The figure becomes reproducible when the scene, data, and script are versioned together.</p>

Note:
Give examples: intensity maps as textures, trajectories as curves, uncertainty as geometry, and arrays as object placement.

[Sources]
- Speaker's Blender agents talk, data-driven visualisation example.
- Reference optical figure retained in `references/source_paper_PRR_2025.pdf`.
[/Sources]

---

<!-- SLIDE 31 -->

<p class="eyebrow">Shared risk</p>

# Plausible wrongness is the failure mode in all three domains

<div class="risk-grid">
  <div>
    <h3>Risks</h3>
    <ul>
      <li>Incorrect equations that produce smooth plots</li>
      <li>Unsafe device sequences that appear to run</li>
      <li>Convincing geometry that encodes wrong physics</li>
      <li>Weak provenance after rapid iteration</li>
    </ul>
  </div>
  <div>
    <h3>Mitigation</h3>
    <ul>
      <li>Write specifications before production work</li>
      <li>Define tests that can fail</li>
      <li>Compare against known limits and measurements</li>
      <li>Version the spec, code, data, and outputs together</li>
    </ul>
  </div>
</div>

Note:
Connect the same validation mindset across simulation, automation, and visualisation.

[Sources]
- Speaker's earlier AI agents for research deck, slide 27.
[/Sources]

---

<!-- SLIDE 32 -->

<p class="eyebrow">How to start</p>

# Begin with one small workflow you can verify

<div class="workflow-list">
  <div><span>01</span><div><strong>Choose a bounded task</strong><small>One model, one instrument, or one figure.</small></div></div>
  <div><span>02</span><div><strong>Write the scientific contract</strong><small>Assumptions, inputs, outputs, conventions, and failure conditions.</small></div></div>
  <div><span>03</span><div><strong>Ask the agent to propose a plan</strong><small>Resolve questions before implementation.</small></div></div>
  <div><span>04</span><div><strong>Make validation executable</strong><small>Tests, benchmark data, safe states, or visual comparisons.</small></div></div>
  <div><span>05</span><div><strong>Keep reproducible records</strong><small>Version the specification, code, data, scene, and decisions.</small></div></div>
</div>

Note:
This is the audience's practical takeaway. It should feel achievable on the next working day.

[Sources]
- Speaker's earlier AI agents for research deck, slide 26.
- Speaker's Blender agents talk, final practical guidance.
[/Sources]

---

<!-- SLIDE 33 -->
<!-- .slide: class="closing-slide" -->

<p class="eyebrow">Takeaway</p>

# AI does not remove the need for expertise. It raises its value.

<p class="takeaway">Agents amplify the researcher's ability to build systems, run loops, and explore alternatives. Domain knowledge determines what to specify, what to test, and when not to trust the result.</p>

<p class="action">Specify clearly. Automate deliberately. Validate scientifically.</p>

<p class="link">egor-manu.github.io/ai-agents-for-research-talk/</p>

Note:
Resolve the opening: agents reduce software friction, while scientific expertise remains the authority.

[Sources]
- Synthesis of the speaker's two earlier talks.
[/Sources]

