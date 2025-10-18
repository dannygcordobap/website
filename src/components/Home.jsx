import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function HomePage() {
  const [aboutContent, setAboutContent] = useState("");
  const [projectsContent, setProjectsContent] = useState("");
  const [resumeContent, setResumeContent] = useState("");

  useEffect(() => {
    fetch("/content/about.md")
      .then((res) => res.text())
      .then((text) => setAboutContent(text));
    fetch("/content/projects.md")
      .then((res) => res.text())
      .then((text) => setProjectsContent(text));
    fetch("/content/resume.md")
      .then((res) => res.text())
      .then((text) => setResumeContent(text));
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans px-6 py-8">
      <main className="flex-grow max-w-4xl mx-auto w-full">
        {/* Header */}
        <header className="mb-12 w-full">
          <div className="flex items-center gap-4">
            <div className="w-full">
              <h1 className="text-4xl">Danny Cordoba</h1>
            </div>
          </div>
        </header>

        {/* About Me */}
        <section>
          <h1>
            About Me
          </h1>
          <div className="max-w-none">
            <ReactMarkdown>{aboutContent}</ReactMarkdown>
          </div>
        </section>

        <hr />

        {/* Experience */}
        <section>
          <h1>
            Experience
          </h1>
          <div className="max-w-none">
            <ReactMarkdown>{resumeContent}</ReactMarkdown>
          </div>
        </section>

        <hr />

        {/* Projects */}
        <section>
          <h1>
            Projects
          </h1>
          <div className="max-w-none">
            <ReactMarkdown>{projectsContent}</ReactMarkdown>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-6 max-w-4xl mx-auto w-full mt-10">
        <hr />
        <p className="mb-1">
                  Contact: <a href="mailto:dannnygcordobap@gmail.com">dannnygcordobap@gmail.com</a>
        </p>
        <p className="mb-1">
          GitHub: <a href="https://github.com/dannygcordobap">github.com/dannygcordobap</a>
        </p>
        <p className="mb-1">© {new Date().getFullYear()} Danny Cordoba</p>
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}
