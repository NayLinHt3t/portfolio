import { profile, skills, projects, socials, resume } from '../data/content.js'

function SectionHead({ n, children }) {
  return (
    <div className="sec-head">
      <span className="slash">// {n}</span>
      {children}
    </div>
  )
}

function cleanUrl(u) {
  return u.replace(/^https?:\/\//, '').replace(/^mailto:/, '').replace(/\/$/, '')
}

export default function Resume() {
  const email = socials.find((s) => s.label === 'email')?.url.replace('mailto:', '')
  const github = socials.find((s) => s.label === 'github')?.url
  const linkedin = socials.find((s) => s.label === 'linkedin')?.url
  const featured = (resume.featured || [])
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <>
      <div className="toolbar">
        <div className="left">
          <b>résumé</b> — {profile.name} · print or ⌘/Ctrl+P → Save as PDF
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <a className="btn" href="/">← portfolio</a>
          <button className="btn primary" onClick={() => window.print()}>
            ↓ Save as PDF
          </button>
        </div>
      </div>

      <div className="sheet">
        {/* header */}
        <header className="r-head">
          <div>
            <div className="r-name">{profile.name}</div>
            <div className="r-role">
              {profile.role}
              {profile.specialties?.length > 0 && (
                <span className="r-spec"> · {profile.specialties.join(' · ')}</span>
              )}
            </div>
          </div>
          <div className="r-contact">
            {profile.location && <div>{profile.location}</div>}
            {email && (
              <div>
                <span className="k">e </span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            )}
            {resume.phone && (
              <div>
                <span className="k">t </span>
                {resume.phone}
              </div>
            )}
            {profile.websiteUrl && (
              <div>
                <span className="k">w </span>
                <a href={profile.websiteUrl}>{profile.website || cleanUrl(profile.websiteUrl)}</a>
              </div>
            )}
            {github && (
              <div>
                <span className="k">gh </span>
                <a href={github}>{cleanUrl(github)}</a>
              </div>
            )}
            {linkedin && (
              <div>
                <span className="k">in </span>
                <a href={linkedin}>{cleanUrl(linkedin)}</a>
              </div>
            )}
          </div>
        </header>

        <div className="rule" />

        {/* summary */}
        <section className="section">
          <SectionHead n="01">summary</SectionHead>
          <p className="summary">{profile.summary}</p>
        </section>

        {/* skills */}
        <section className="section">
          <SectionHead n="02">skills</SectionHead>
          <div className="skills-grid">
            {skills.map((g) => (
              <div className="skill-row" key={g.group}>
                <span className="g">{g.group}</span>
                <span className="v">{g.items.join(' · ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* experience */}
        {resume.experience?.length > 0 && (
          <section className="section">
            <SectionHead n="03">experience</SectionHead>
            {resume.experience.map((e, i) => (
              <div className="entry" key={i}>
                <div className="entry-top">
                  <div>
                    <span className="entry-title">{e.title}</span>
                    {e.org && <span className="entry-org"> · {e.org}</span>}
                  </div>
                  <div className="entry-meta">
                    {e.start}{e.start && e.end ? ` – ${e.end}` : e.end}
                    {e.location ? ` · ${e.location}` : ''}
                  </div>
                </div>
                {e.bullets?.length > 0 && (
                  <ul className="bullets">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
                {e.stack?.length > 0 && (
                  <div className="stackline">
                    <span className="k">stack:</span> {e.stack.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* projects */}
        {featured.length > 0 && (
          <section className="section">
            <SectionHead n="04">projects</SectionHead>
            {featured.map((p) => (
              <div className="entry" key={p.id}>
                <div className="entry-top">
                  <div>
                    <span className="entry-title">{p.name}</span>
                    <span className="entry-org"> · {p.tagline}</span>
                  </div>
                  <div className="entry-meta">{p.period}</div>
                </div>
                <ul className="bullets">
                  {(p.bullets?.length ? p.bullets : [p.summary]).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {p.stack?.length > 0 && (
                  <div className="stackline">
                    <span className="k">stack:</span> {p.stack.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* education */}
        {resume.education?.length > 0 && (
          <section className="section">
            <SectionHead n="05">education</SectionHead>
            {resume.education.map((ed, i) => (
              <div className="entry" key={i}>
                <div className="entry-top">
                  <div>
                    <span className="entry-title">{ed.degree}</span>
                    {ed.school && <span className="entry-org"> · {ed.school}</span>}
                  </div>
                  <div className="entry-meta">
                    {ed.start}{ed.start && ed.end ? ` – ${ed.end}` : ed.end}
                    {ed.location ? ` · ${ed.location}` : ''}
                  </div>
                </div>
                {ed.detail && <div className="entry-sub">{ed.detail}</div>}
              </div>
            ))}
          </section>
        )}

        <div className="foot">
          <span>{profile.name}</span>
          <span>generated from {profile.website || 'portfolio'} · {new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  )
}
